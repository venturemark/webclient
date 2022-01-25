import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/invite/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { DeletionStatus } from "module/interface/api";
import { IDeleteInvite } from "module/interface/invite";

export async function Delete(
  IDeleteInvite: IDeleteInvite
): Promise<DeletionStatus[]> {
  const objList = [];

  const token = IDeleteInvite.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.InviteID, IDeleteInvite.id);
  obj.getMetadataMap().set(key.VentureID, IDeleteInvite.ventureId);
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
            return metaPb.get(key.InviteStatus) as DeletionStatus;
          })
        );
      }
    });
  });
}
