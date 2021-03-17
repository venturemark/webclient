import {
  DeleteI,
  DeleteI_Obj,
  DeleteO_Obj,
} from "module/api/venture/proto/delete_pb";
import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IVenture, IDeleteVenture } from "module/interface/venture/index";
import * as key from "module/apikeys";

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

  const getDeleteResponsePb: IVenture[] = await new Promise(
    (resolve, reject) => {
      client.delete(req, metadata, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const venturesPb = res.getObjList();

          const status = venturesPb.map((venturePb: DeleteO_Obj) => {
            const metaPb = venturePb.getMetadataMap();
            const id = metaPb.get(key.VentureStatus);
            return id;
          });
          resolve(status);
        }
      });
    }
  );
  return getDeleteResponsePb;
}
