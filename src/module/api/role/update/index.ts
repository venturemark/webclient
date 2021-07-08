import { APIClient } from "module/api/role/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/role/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { UpdateStatus } from "module/interface/api";
import { IUpdateRole } from "module/interface/role";

export async function Update(updateRole: IUpdateRole): Promise<UpdateStatus[]> {
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

  return new Promise((resolve, reject) => {
    client.update(req, {}, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.RoleStatus) as UpdateStatus;
          })
        );
      }
    });
  });
}
