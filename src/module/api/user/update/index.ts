import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/user/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IUpdateUser, IUser } from "module/interface/user";

export async function Update(updateUser: IUpdateUser): Promise<IUser[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  obj.getMetadataMap().set(key.UserID, updateUser.id);

  const token = updateUser.token;
  const metadata = { Authorization: `Bearer ${token}` };

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

  obj.setJsnpatchList(patchList);
  req.setObjList([obj]);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const userPb = res.getObjList()[0];
        const metaPb = userPb.getMetadataMap();
        const status = metaPb.get(key.UserStatus);

        resolve(status as unknown as IUser[]); // TODO: check
      }
    });
  });
}
