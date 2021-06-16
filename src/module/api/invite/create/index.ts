import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateO,
} from "module/api/invite/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ICreateInvite, IInvite } from "module/interface/invite";

export async function Create(newInvite: ICreateInvite) {
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
  newInvite.timelineId &&
    obj.getMetadataMap().set(key.TimelineID, newInvite.timelineId);
  obj.getMetadataMap().set(key.RoleKind, newInvite.role);
  obj.getMetadataMap().set(key.ResourceKind, newInvite.resource);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<IInvite>((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        const invitePbList = res.getObjList();
        const invitePbObject = invitePbList[0];
        const metaPb = invitePbObject?.getMetadataMap();
        const id = metaPb.get(key.InviteID)!;
        const code = metaPb.get(key.InviteCode);

        resolve({
          id,
          code,
          email: newInvite.email,
          resource: newInvite.resource,
          role: newInvite.role,
          timelineId: newInvite.timelineId,
          ventureId: newInvite.ventureId,
        });
      }
    });
  });
}
