import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import {
  SearchI,
  SearchI_Obj,
  SearchO,
} from "module/api/venture/proto/search_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IAPISearchVenture } from "module/interface/api";
import { IVenture } from "module/interface/venture";

export async function Search(
  ventureSearch: IAPISearchVenture
): Promise<IVenture[]> {
  const objList = [];

  const token = ventureSearch.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();
  const obj = new SearchI_Obj();

  ventureSearch.id && obj.getMetadataMap().set(key.VentureID, ventureSearch.id);
  ventureSearch.userId &&
    obj.getMetadataMap().set(key.SubjectID, ventureSearch.userId);
  objList.push(obj);
  req.setObjList(objList);

  return new Promise<IVenture[]>((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: SearchO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const venturesPb = res.getObjList();

        const ventures = venturesPb.map((venturePb) => {
          const propertiesPb = venturePb.getProperty();
          const metaPb = venturePb.getMetadataMap();
          const membersWrite = metaPb.get(key.PermissionModel) === "writer";
          const name = propertiesPb?.getName() as string;
          const desc = propertiesPb?.getDesc() as string;
          const url = propertiesPb?.getLinkList()?.[0]?.getAddr();
          const id = metaPb.get(key.VentureID)!;

          return {
            name,
            desc,
            id,
            url,
            membersWrite,
          };
        });
        resolve(ventures);
      }
    });
  });
}
