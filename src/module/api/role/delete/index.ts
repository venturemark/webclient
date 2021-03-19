import {
  DeleteI,
  DeleteI_Obj,
  DeleteO_Obj,
} from "module/api/role/proto/delete_pb";
import { APIClient } from "module/api/role/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IRole, IDeleteRole } from "module/interface/role";
import * as key from "module/apikeys";

export async function Delete(IDeleteRole: IDeleteRole): Promise<IRole[]> {
  const objList = [];

  const token = IDeleteRole.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.ResourceKind, IDeleteRole.resource);
  obj.getMetadataMap().set(key.RoleID, IDeleteRole.id);
  obj.getMetadataMap().set(key.VentureID, IDeleteRole.ventureId);
  objList.push(obj);
  req.setObjList(objList);

  const getDeleteResponsePb: IRole[] = await new Promise((resolve, reject) => {
    client.delete(req, metadata, function (err: any, res: any): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
        return;
      } else {
        const rolesPb = res.getObjList();

        const status = rolesPb.map((rolePb: DeleteO_Obj) => {
          const metaPb = rolePb.getMetadataMap();
          const id = metaPb.get(key.RoleStatus);
          return id;
        });
        resolve(status);
      }
    });
  });
  return getDeleteResponsePb;
}
