import {
  SearchI,
  SearchI_Obj,
  SearchO_Obj,
} from "module/api/timeline/proto/search_pb";
import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import * as env from "module/env";
import { ITimeline, ISearchTimeline } from "module/interface/timeline/index";
import * as key from "module/apikeys";

export async function Search(
  timelineQuery: ISearchTimeline
): Promise<ITimeline[]> {
  const objList = [];

  const token = timelineQuery.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.VentureID, timelineQuery.ventureId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb: ITimeline[] = await new Promise(
    (resolve, reject) => {
      client.search(req, metadata, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const timelinesPb = res.getObjList();

          const timelines = timelinesPb.map((timelinePb: SearchO_Obj) => {
            const propertiesPb = timelinePb.getProperty();
            const metaPb = timelinePb.getMetadataMap();

            const name = propertiesPb?.getName() as string;
            const desc = propertiesPb?.getDesc() as string;
            const stat = propertiesPb?.getStat() as string;
            const ventureId = metaPb.get(key.VentureID);
            const id = metaPb.get(key.TimelineID);

            const timeline: ITimeline = {
              name: name,
              desc: desc,
              stat: stat,
              ventureId: ventureId,
              id: id,
            };
            return timeline;
          });
          resolve(timelines);
        }
      });
    }
  );
  return getSearchResponsePb;
}
