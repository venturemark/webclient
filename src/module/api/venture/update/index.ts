import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/venture/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IUpdateVenture, IVenture } from "module/interface/venture";

export async function Update(
  ventureUpdate: IUpdateVenture
): Promise<IVenture[]> {
  const token = ventureUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();

  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.VentureID, ventureUpdate.id);

  if (ventureUpdate.name) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat("/obj/property/name");
    patch.setVal(ventureUpdate.name);
    patchList.push(patch);
  }

  if (ventureUpdate.desc) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat("/obj/property/desc");
    patch.setVal(ventureUpdate.desc);
    patchList.push(patch);
  }

  {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat(`/obj/metadata/${key.PermissionModel.replace("/", "~1")}`);
    patch.setVal(ventureUpdate.membersWrite ? "writer" : "reader");
    patchList.push(patch);
  }

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<IVenture[]>((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const venturePb = res.getObjList()[0];
        const metaPb = venturePb.getMetadataMap();
        const status = metaPb.get(key.VentureStatus);

        resolve(status as unknown as IVenture[]); // TODO: check
      }
    });
  });
}
