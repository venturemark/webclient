import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/timeline/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { DeletionStatus } from "module/interface/api";
import { IDeleteTimeline } from "module/interface/timeline";

export async function Delete(
  IDeleteTimeline: IDeleteTimeline
): Promise<DeletionStatus[]> {
  const objList = [];

  const token = IDeleteTimeline.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.TimelineID, IDeleteTimeline.id);
  obj.getMetadataMap().set(key.VentureID, IDeleteTimeline.ventureId);
  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.delete(req, metadata, function (err: any, res: DeleteO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.TimelineStatus) as DeletionStatus;
          })
        );
      }
    });
  });
}
