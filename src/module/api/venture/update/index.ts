import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/venture/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { UpdateStatus } from "module/interface/api";
import { IUpdateVenture } from "module/interface/venture";

export async function Update(
  ventureUpdate: IUpdateVenture
): Promise<UpdateStatus[]> {
  const token = ventureUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const descriptionObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const urlObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.VentureID, ventureUpdate.id);

  if (ventureUpdate.name) {
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/name");
    nameObjJsnPatch.setVal(ventureUpdate.name);
  }

  if (ventureUpdate.desc) {
    descriptionObjJsnPatch.setOpe("replace");
    descriptionObjJsnPatch.setPat("/obj/property/desc");
    descriptionObjJsnPatch.setVal(ventureUpdate.desc);
  }

  if (ventureUpdate.url) {
    urlObjJsnPatch.setOpe("replace");
    urlObjJsnPatch.setPat("/obj/property/link/0/addr");
    urlObjJsnPatch.setVal(ventureUpdate.url);
    patchList.push(urlObjJsnPatch);
  }

  {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat(`/obj/metadata/${key.PermissionModel.replace("/", "~1")}`);
    patch.setVal(ventureUpdate.membersWrite ? "writer" : "reader");
    patchList.push(patch);
  }

  patchList.push(nameObjJsnPatch);
  patchList.push(descriptionObjJsnPatch);

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.VentureStatus) as UpdateStatus;
          })
        );
      }
    });
  });
}
