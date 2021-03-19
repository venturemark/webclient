import {
  DeleteI,
  DeleteI_Obj,
  DeleteO_Obj,
} from "module/api/user/proto/delete_pb";
import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IUser, IDeleteUser } from "module/interface/user/index";
import * as key from "module/apikeys";

export async function Delete(IDeleteUser: IDeleteUser): Promise<IUser[]> {
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

  const getDeleteResponsePb: IUser[] = await new Promise((resolve, reject) => {
    client.delete(req, metadata, function (err: any, res: any): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
        return;
      } else {
        const usersPb = res.getObjList();

        const status = usersPb.map((userPb: DeleteO_Obj) => {
          const metaPb = userPb.getMetadataMap();
          const id = metaPb.get(key.UserStatus);
          return id;
        });
        resolve(status);
      }
    });
  });
  return getDeleteResponsePb;
}
