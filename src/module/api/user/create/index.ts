import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Prof,
  CreateO,
} from "module/api/user/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ICreateUser } from "module/interface/user";

export async function Create(newUser: ICreateUser) {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const objPropertyProf = new CreateI_Obj_Property_Prof();
  const objList = [];
  const profList = [];

  const token = newUser.token;
  const metadata = { Authorization: `Bearer ${token}` };

  newUser.ventureTitle && objPropertyProf.setDesc(newUser.ventureTitle);
  newUser.ventureName && objPropertyProf.setVent(newUser.ventureName);
  profList.push(objPropertyProf);

  objProperty.setName(newUser.name);
  objProperty.setDesc(newUser.title);
  objProperty.setProfList(profList);

  obj.setProperty(objProperty);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<string>((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        const userPbList = res.getObjList();
        const userPbObject = userPbList[0];
        const metaPb = userPbObject?.getMetadataMap();
        const userId = metaPb.get(key.UserID) as string;
        resolve(userId);
      }
    });
  });
}
