import {
  UpdateI,
  UpdateI_Obj,
  UpdateO_Obj,
  UpdateI_Obj_Jsnpatch,
} from "module/api/user/proto/update_pb";
import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/apikeys";
import { IUser, IUpdateUser } from "module/interface/user";

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
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/title");
    nameObjJsnPatch.setVal(updateUser.title);
    patchList.push(titleObjJsnPatch);
  }

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  const getUpdateResponsePb: IUser[] = await new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: any): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
        return;
      } else {
        const userPb: UpdateO_Obj = res.getObj();
        const metaPb = userPb.getMetadataMap();
        const status = metaPb.get(key.UserStatus);

        resolve(status);
      }
    });
  });
  return getUpdateResponsePb;
}
