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

  timelineSearch.userId &&
    obj.getMetadataMap().set(key.SubjectID, timelineSearch.userId);
  // timelineSearch.ventureId &&
  //   obj.getMetadataMap().set(key.VentureID, timelineSearch.ventureId);

  objList.push(obj);
  req.setObjList(objList);

  let getSearchResponsePb: ITimeline[] = await new Promise(
    (resolve, reject) => {
      client.search(req, metadata, function (err: any, res: SearchO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          let timelinesPb = res.getObjList();

          let timelines = timelinesPb.map((timelinePb) => {
            let propertiesPb = timelinePb.getProperty();
            let metaPb = timelinePb.getMetadataMap();

            let name = propertiesPb?.getName() as string;
            let desc = propertiesPb?.getDesc() as string;
            let stat = propertiesPb?.getStat() as string;

            let ventureId = metaPb.get(key.VentureID);
            let userId = metaPb.get(key.UserID);
            let id = metaPb.get(key.TimelineID);

            let timeline: ITimeline = {
              name: name,
              desc: desc,
              stat: stat,
              userId: userId,
              ventureId: ventureId,
              id: id,
            };
            console.log("timeline in search", timeline);
            return timeline;
          });
          console.log("timelines output", timelines);
          resolve(timelines);
        }
      });
    }
  );
  return getSearchResponsePb;
}
