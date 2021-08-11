import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import { DeleteI, DeleteI_Obj, DeleteO } from "module/api/user/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { DeletionStatus } from "module/interface/api";
import { IDeleteUser } from "module/interface/user";

export async function Delete(
  IDeleteUser: IDeleteUser
): Promise<DeletionStatus[]> {
  const objList = [];

  const token = IDeleteUser.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.UserID, IDeleteUser.id);
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
            return metaPb.get(key.UserStatus) as DeletionStatus;
          })
        );
      }
    });
  });
}
