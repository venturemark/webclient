import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/invite/proto/delete_pb";
import { APIClient } from "module/api/invite/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IInvite, IDeleteInvite } from "module/interface/invite/index";
import * as key from "module/apikeys";

export async function Delete(IDeleteInvite: IDeleteInvite): Promise<IInvite[]> {
  const objList = [];

  const token = IDeleteInvite.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.InviteID, IDeleteInvite.id);
  obj.getMetadataMap().set(key.VentureID, IDeleteInvite.ventureId);
  objList.push(obj);
  req.setObjList(objList);

  const getDeleteResponsePb: IInvite[] = await new Promise(
    (resolve, reject) => {
      client.delete(req, metadata, function (err: any, res: DeleteO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const invitesPb = res.getObjList();

          const status = invitesPb.map((invitePb) => {
            const metaPb = invitePb.getMetadataMap();
            const id = metaPb.get(key.InviteStatus);
            return id;
          });
          resolve(status);
        }
      });
    }
  );
  return getDeleteResponsePb;
}
