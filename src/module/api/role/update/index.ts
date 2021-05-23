import { APIClient } from "module/api/role/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO_Obj,
} from "module/api/role/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IRole, IUpdateRole } from "module/interface/role";

export async function Update(updateRole: IUpdateRole): Promise<IRole[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const roleObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.ResourceKind, updateRole.resource);
  obj.getMetadataMap().set(key.VentureID, updateRole.ventureId);
  obj.getMetadataMap().set(key.RoleID, updateRole.id);

  if (updateRole.role) {
    roleObjJsnPatch.setOpe("replace");
    roleObjJsnPatch.setPat("/obj/property/role");
    roleObjJsnPatch.setVal(updateRole.role);
  }

  patchList.push(roleObjJsnPatch);

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<IRole[]>((resolve, reject) => {
    client.update(req, {}, function (err: any, res: any): any {
      if (err) {
        reject(err);
        return;
      } else {
        const rolePb: UpdateO_Obj = res.getObj();
        const metaPb = rolePb.getMetadataMap();
        const status = metaPb.get(key.RoleStatus);

        resolve(status);
      }
    });
  });
}
