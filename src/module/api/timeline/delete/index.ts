import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/timeline/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IDeleteTimeline, ITimeline } from "module/interface/timeline";

export async function Delete(
  IDeleteTimeline: IDeleteTimeline
): Promise<ITimeline[]> {
  const objList = [];

  const token = IDeleteTimeline.token;
  const metadata = { Authorization: `Bearer ${token}` };

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
        const timelinesPb = res.getObjList();

        const status = timelinesPb.map((timelinePb) => {
          const metaPb = timelinePb.getMetadataMap();
          const id = metaPb.get(key.TimelineStatus);
          return id as ITimeline;
        });
        resolve(status);
      }
    });
  });
}
