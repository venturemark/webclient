import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/user/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { UpdateStatus } from "module/interface/api";
import { IUpdateUser } from "module/interface/user";

export async function Update(updateUser: IUpdateUser): Promise<UpdateStatus[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  obj.getMetadataMap().set(key.UserID, updateUser.id);

  const token = updateUser.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  const patchList = [];

  if (updateUser.name) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat("/obj/property/name");
    patch.setVal(updateUser.name);
    patchList.push(patch);
  }

  if (updateUser.title) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat("/obj/property/desc");
    patch.setVal(updateUser.title);
    patchList.push(patch);
  }

  if (updateUser.mail) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe("replace");
    patch.setPat("/obj/property/mail");
    patch.setVal(updateUser.mail);
    patchList.push(patch);
  }

  if (updateUser.lastUpdate) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe(updateUser.previous?.lastUpdate ? "replace" : "add");
    patch.setPat(`/obj/metadata/${key.TimelineLastUpdate.replace("/", "~1")}`);
    patch.setVal(JSON.stringify(updateUser.lastUpdate));
    patchList.push(patch);
  }

  obj.setJsnpatchList(patchList);
  req.setObjList([obj]);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.UserStatus) as UpdateStatus;
          })
        );
      }
    });
  });
}
