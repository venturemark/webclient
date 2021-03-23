import {
  UpdateI,
  UpdateI_Obj,
  UpdateO,
  UpdateI_Obj_Jsnpatch,
} from "module/api/venture/proto/update_pb";
import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IVenture, IUpdateVenture } from "module/interface/venture/index";
import * as key from "module/apikeys";

export async function Update(
  ventureUpdate: IUpdateVenture
): Promise<IVenture[]> {
  const token = ventureUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const descriptionObjJsnPatch = new UpdateI_Obj_Jsnpatch();
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

  patchList.push(nameObjJsnPatch);
  patchList.push(descriptionObjJsnPatch);

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  const getUpdateResponsePb: IVenture[] = await new Promise(
    (resolve, reject) => {
      client.update(req, metadata, function (err: any, res: UpdateO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const venturePb = res.getObjList()[0];
          const metaPb = venturePb.getMetadataMap();
          const status = metaPb.get(key.VentureStatus);

          resolve(status);
        }
      });
    }
  );
  return getUpdateResponsePb;
}
