import {
  SearchI,
  SearchI_Obj,
  SearchO,
} from "module/api/invite/proto/search_pb";
import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IInvite, ISearchInvite } from "module/interface/invite";
import * as key from "module/apikeys";

export async function Search(searchInvite: ISearchInvite): Promise<IInvite[]> {
  const objList = [];

  const token = searchInvite.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  obj.getMetadataMap().set(key.VentureID, searchInvite.ventureId);

  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb: IInvite[] = await new Promise(
    (resolve, reject) => {
      client.search(req, metadata, function (err: any, res: SearchO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const invitesPb = res.getObjList();

          const invites = invitesPb.map((invitePb) => {
            const propertiesPb = invitePb.getProperty();
            const metaPb = invitePb.getMetadataMap();

            const id = metaPb.get(key.InviteID);
            const ventureId = metaPb.get(key.VentureID);
            const email = propertiesPb?.getMail();

            const invite: IInvite = {
              id: id,
              ventureId,
              email,
            };
            return invite;
          });
          resolve(invites);
        }
      });
    }
  );
  return getSearchResponsePb;
}
