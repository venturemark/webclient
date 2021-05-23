import { APIClient } from "module/api/role/proto/ApiServiceClientPb";
import { CreateI, CreateI_Obj, CreateO } from "module/api/role/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { INewRole } from "module/interface/role";

export async function Create(newRole: INewRole) {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objList = [];

  const token = newRole.token;
  const metadata = { Authorization: `Bearer ${token}` };

  obj.getMetadataMap().set(key.ResourceKind, newRole.resource);
  obj.getMetadataMap().set(key.RoleKind, newRole.role);
  obj.getMetadataMap().set(key.SubjectID, newRole.subjectId);
  obj.getMetadataMap().set(key.VentureID, newRole.ventureId);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<string>((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        const rolePbList = res.getObjList();
        const rolePbObject = rolePbList[0];
        const metaPb = rolePbObject?.getMetadataMap();
        const roleId = metaPb.get(key.RoleID);
        resolve(roleId);
      }
    });
  });
}
