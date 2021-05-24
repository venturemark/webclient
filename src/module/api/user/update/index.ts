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

  const token = updateUser.token;
  const metadata = { Authorization: `Bearer ${token}` };

  const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const titleObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.UserID, updateUser.id);

  if (updateUser.name) {
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/name");
    nameObjJsnPatch.setVal(updateUser.name);
    patchList.push(nameObjJsnPatch);
  }

  if (updateUser.title) {
    titleObjJsnPatch.setOpe("replace");
    titleObjJsnPatch.setPat("/obj/property/desc");
    titleObjJsnPatch.setVal(updateUser.title);
    patchList.push(titleObjJsnPatch);
  }

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const userPb = res.getObjList()[0];
        const metaPb = userPb.getMetadataMap();
        const status = metaPb.get(key.UserStatus);

        resolve(status as IUser[]);
      }
    });
  });
}
