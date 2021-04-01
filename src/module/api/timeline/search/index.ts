import {
  SearchI,
  SearchI_Obj,
  SearchO,
} from "module/api/timeline/proto/search_pb";
import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import * as env from "module/env";
import { ITimeline, ISearchTimeline } from "module/interface/timeline/index";
import * as key from "module/apikeys";

export async function Search(
  timelineSearch: ISearchTimeline
): Promise<ITimeline[]> {
  const objList = [];

  const token = timelineSearch.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  console.log("timeline search", timelineSearch);

  timelineSearch.userId &&
    obj.getMetadataMap().set(key.SubjectID, timelineSearch.userId);
  // timelineSearch.ventureId &&
  //   obj.getMetadataMap().set(key.VentureID, timelineSearch.ventureId);

  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb: ITimeline[] = await new Promise(
    (resolve, reject) => {
      client.search(req, metadata, function (err: any, res: SearchO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const timelinesPb = res.getObjList();

          const timelines = timelinesPb.map((timelinePb) => {
            const propertiesPb = timelinePb.getProperty();
            const metaPb = timelinePb.getMetadataMap();

            const name = propertiesPb?.getName() as string;
            const desc = propertiesPb?.getDesc() as string;
            const stat = propertiesPb?.getStat() as string;

            const userId = metaPb.get(key.UserID);
            const id = metaPb.get(key.TimelineID);
            const ventureId = metaPb.get(key.VentureID);

            console.log("timelines returned:", ventureId);

            const timeline: ITimeline = {
              name: name,
              desc: desc,
              stat: stat,
              userId: userId,
              ventureId: ventureId,
              id: id,
            };
            console.log("timelines returned:", timeline);
            return timeline;
          });
          console.log("timelines returned:", timelines);
          resolve(timelines);
        }
      });
    }
  );
  return getSearchResponsePb;
}
