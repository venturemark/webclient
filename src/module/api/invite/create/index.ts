import {
  CreateI,
  CreateI_Obj,
  CreateO,
  CreateI_Obj_Property,
} from "module/api/invite/proto/create_pb";
import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/apikeys";
import { ICreateInvite, IInvite } from "module/interface/invite";

export async function Create(newInvite: ICreateInvite): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const objList = [];

  const token = newInvite.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objProperty.setMail(newInvite.email);

  obj.setProperty(objProperty);
  obj.getMetadataMap().set(key.VentureID, newInvite.ventureId);

  objList.push(obj);
  req.setObjList(objList);
  console.log("invite to send request:", req.toObject());

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        console.log("invite created! success");
        const invitePbList = res.getObjList();
        const invitePbObject = invitePbList[0];
        const metaPb = invitePbObject?.getMetadataMap();
        const id = metaPb.get(key.InviteID);
        const code = metaPb.get(key.InviteCode);

        const invite: IInvite = {
          id,
          code,
          email: newInvite.email,
          ventureId: newInvite.ventureId,
        };
        console.log("created invite", invite);
        resolve(invite);
      }
    });
  });

  return getCreateResponsePb;
}
