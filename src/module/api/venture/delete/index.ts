import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/venture/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IDeleteVenture, IVenture } from "module/interface/venture";

export async function Delete(
  deleteVenture: IDeleteVenture
): Promise<IVenture[]> {
  const objList = [];

  const token = deleteVenture.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();
  const obj = new DeleteI_Obj();

  obj.getMetadataMap().set(key.VentureID, deleteVenture.id);
  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.delete(req, metadata, function (err: any, res: DeleteO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const venturesPb = res.getObjList();

        const status = venturesPb.map((venturePb) => {
          const metaPb = venturePb.getMetadataMap();
          return metaPb.get(key.VentureStatus) as unknown as IVenture; // TODO: check
        });

        resolve(status);
      }
    });
  });
}
