import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/texupd/proto/delete_pb";
import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IUpdate, IDeleteUpdate } from "module/interface/update/index";
import * as key from "module/apikeys";

export async function Delete(deleteUpdate: IDeleteUpdate): Promise<IUpdate[]> {
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

  const getDeleteResponsePb: IUpdate[] = await new Promise(
    (resolve, reject) => {
      client.delete(req, metadata, function (err: any, res: DeleteO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const updatesPb = res.getObjList();

          const status = updatesPb.map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            const id = metaPb.get(key.UpdateStatus);
            return id;
          });
          resolve(status);
        }
      });
    }
  );
  return getDeleteResponsePb;
}
