import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import {
  SearchI,
  SearchI_Obj,
  SearchO,
} from "module/api/timeline/proto/search_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IAPISearchTimeline } from "module/interface/api";
import { ITimeline } from "module/interface/timeline";

export async function Search(
  timelineSearch: IAPISearchTimeline
): Promise<ITimeline[]> {
  const objList = [];

  const token = timelineSearch.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  timelineSearch.userId &&
    obj.getMetadataMap().set(key.SubjectID, timelineSearch.userId);
  timelineSearch.ventureId &&
    obj.getMetadataMap().set(key.VentureID, timelineSearch.ventureId);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: SearchO): any {
      if (err) {
        reject(err);
        return;
      } else {
        let timelinesPb = res.getObjList();

        let timelines = timelinesPb.map((timelinePb) => {
          let propertiesPb = timelinePb.getProperty();
          let metaPb = timelinePb.getMetadataMap();
          let membersWrite = metaPb.get(key.PermissionModel) === "writer";
          let lastUpdate = metaPb.get(key.TimelineLastUpdate);
          let visibility = metaPb.get(key.ResourceVisibility);
          let name = propertiesPb?.getName() as string;
          let desc = propertiesPb?.getDesc() as string;
          let stat = propertiesPb?.getStat() as string;

          let ventureId = metaPb.get(key.VentureID)!;
          let userId = metaPb.get(key.UserID);
          let id = metaPb.get(key.TimelineID)!;

          let timeline: ITimeline = {
            name,
            desc,
            stat,
            userId,
            ventureId,
            id,
            membersWrite,
            lastUpdate,
            visibility,
          };
          return timeline;
        });
        resolve(timelines);
      }
    });
  });
}
