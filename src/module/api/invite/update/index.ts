import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/invite/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IUpdateInvite, IUpdateStatus } from "module/interface/invite";

export async function Update(updateInvite: IUpdateInvite): Promise<any> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();

  const token = updateInvite.token;
  const metadata = { Authorization: `Bearer ${token}` };

  const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.InviteID, updateInvite.id);
  obj.getMetadataMap().set(key.VentureID, updateInvite.ventureId);
  updateInvite.timelineId &&
    obj.getMetadataMap().set(key.TimelineID, updateInvite.timelineId);
  obj.getMetadataMap().set(key.InviteCode, updateInvite.code);
  obj.getMetadataMap().set(key.RoleKind, updateInvite.role);
  obj.getMetadataMap().set(key.ResourceKind, updateInvite.resource);

  if (updateInvite.status) {
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/stat");
    nameObjJsnPatch.setVal(updateInvite.status);
    patchList.push(nameObjJsnPatch);
  }

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  const getUpdateResponsePb: IUpdateStatus = await new Promise(
    (resolve, reject) => {
      client.update(req, metadata, function (err: any, res: UpdateO): any {
        if (err) {
          reject(err);
          return;
        } else {
          const invitePb = res.getObjList()[0];
          const metaPb = invitePb.getMetadataMap();
          const status = metaPb.get(key.InviteStatus);
          const role = metaPb.get(key.RoleStatus);

          const inviteStatus: IUpdateStatus = {
            role,
            status,
          };

          resolve(inviteStatus);
        }
      });
    }
  );
  return getUpdateResponsePb;
}
