import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/texupd/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { DeletionStatus } from "module/interface/api";
import { IDeleteUpdate } from "module/interface/update";

export async function Delete(
  deleteUpdate: IDeleteUpdate
): Promise<DeletionStatus[]> {
  const objList = [];

  const token = deleteUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.UpdateID, deleteUpdate.id);
  obj.getMetadataMap().set(key.VentureID, deleteUpdate.ventureId);
  obj.getMetadataMap().set(key.TimelineID, deleteUpdate.timelineId);
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
            return metaPb.get(key.UpdateStatus) as DeletionStatus;
          })
        );
      }
    });
  });
}
