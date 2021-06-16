import { APIClient } from "module/api/role/proto/ApiServiceClientPb";
import { DeleteI, DeleteI_Obj, DeleteO } from "module/api/role/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IAPIDeleteRole } from "module/interface/api";
import { IRole } from "module/interface/role";

export async function Delete(IDeleteRole: IAPIDeleteRole): Promise<IRole[]> {
  const objList = [];

  const token = IDeleteRole.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.ResourceKind, IDeleteRole.resource);
  obj.getMetadataMap().set(key.RoleID, IDeleteRole.id);
  IDeleteRole.ventureId &&
    obj.getMetadataMap().set(key.VentureID, IDeleteRole.ventureId);
  IDeleteRole.timelineId &&
    obj.getMetadataMap().set(key.TimelineID, IDeleteRole.timelineId);
  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.delete(req, metadata, function (err: any, res: DeleteO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const rolesPb = res.getObjList();

        const status = rolesPb.map((rolePb) => {
          const metaPb = rolePb.getMetadataMap();
          const id = metaPb.get(key.RoleStatus);
          return id as unknown as IRole; // TODO: check
        });
        resolve(status);
      }
    });
  });
}
