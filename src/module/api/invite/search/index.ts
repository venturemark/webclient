import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import {
  SearchI,
  SearchI_Obj,
  SearchO,
} from "module/api/invite/proto/search_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IInvite, ISearchInvite } from "module/interface/invite";

export async function Search(searchInvite: ISearchInvite): Promise<IInvite[]> {
  const objList = [];

  const token = searchInvite.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  obj.getMetadataMap().set(key.VentureID, searchInvite.ventureId!);

  if (searchInvite.timelineId) {
    obj.getMetadataMap().set(key.TimelineID, searchInvite.timelineId!);
  }

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: SearchO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const invitesPb = res.getObjList();

        const invites = invitesPb.map((invitePb) => {
          const propertiesPb = invitePb.getProperty();
          const metaPb = invitePb.getMetadataMap();

          const id = metaPb.get(key.InviteID)!;
          const ventureId = metaPb.get(key.VentureID)!;
          const email = propertiesPb?.getMail();
          const status = propertiesPb?.getStat();
          const resource = metaPb.get(key.ResourceKind)!;
          const role = metaPb.get(key.RoleKind)!;
          const timelineId = metaPb.get(key.TimelineID);

          const invite: IInvite = {
            id,
            ventureId,
            timelineId,
            email,
            resource,
            role,
            status,
          };
          return invite;
        });
        resolve(invites);
      }
    });
  });
}
