import {
  DeleteI,
  DeleteI_Obj,
  DeleteO_Obj,
} from "module/api/timeline/proto/delete_pb";
import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import * as env from "module/env";
import { ITimeline, IDeleteTimeline } from "module/interface/timeline/index";
import * as key from "module/apikeys";

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
  objList.push(obj);
  req.setObjList(objList);

  const getDeleteResponsePb: ITimeline[] = await new Promise(
    (resolve, reject) => {
      client.delete(req, metadata, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const timelinesPb = res.getObjList();

          const status = timelinesPb.map((timelinePb: DeleteO_Obj) => {
            const metaPb = timelinePb.getMetadataMap();
            const id = metaPb.get(key.TimelineStatus);
            return id;
          });
          resolve(status);
        }
      });
    }
  );
  return getDeleteResponsePb;
}
