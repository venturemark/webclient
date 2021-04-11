import {
  SearchI,
  SearchI_Obj,
  SearchO_Obj,
} from "module/api/venture/proto/search_pb";
import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IVenture } from "module/interface/venture/index";
import * as key from "module/apikeys";
import { IAPISearchVenture } from "module/interface/api";

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

  const getSearchResponsePb: IVenture[] = await new Promise(
    (resolve, reject) => {
      client.search(req, metadata, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const venturesPb = res.getObjList();

          const ventures = venturesPb.map((venturePb: SearchO_Obj) => {
            const propertiesPb = venturePb.getProperty();
            const metaPb = venturePb.getMetadataMap();

            const name = propertiesPb?.getName() as string;
            const desc = propertiesPb?.getDesc() as string;
            const linkAddress = propertiesPb?.getLinkList()[0].getAddr();
            const id = metaPb.get(key.VentureID);

            const venture: IVenture = {
              name: name,
              desc: desc,
              id: id,
              url: linkAddress,
            };
            return venture;
          });
          resolve(ventures);
        }
      });
    }
  );
  return getSearchResponsePb;
}
