import * as apigents from '@venturemark/apigents';
import { SearchI_Obj } from 'module/api/timeline/proto/search_pb';
import { SearchO_Obj } from 'module/api/timeline/proto/search_pb';
import * as env from 'module/env';
import {
  ITimeline,
  ITimelineQuery,
} from 'module/interface/timeline/index';
import * as key from 'module/idkeys';

export async function Search(
  timelineQuery: ITimelineQuery,
): Promise<ITimeline[]> {
  const objList = [];
  //instantiate client and req classes
  const client = new apigents.Timeline.Client(env.APIEndpoint());
  const req = new apigents.Timeline.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.

  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.UserID, timelineQuery.userId);
  obj
    .getMetadataMap()
    .set(key.OrganizationID, timelineQuery.organizationId);
  obj.getMetadataMap().set(key.AudienceID, timelineQuery.audienceId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb: ITimeline[] = await new Promise(
    (resolve, reject) => {
      client.search(req, {}, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const timelinesPb = res.getObjList();

          const timelines = timelinesPb.map(
            (timelinePb: SearchO_Obj) => {
              const propertiesPb = timelinePb.getProperty();
              const metaPb = timelinePb.getMetadataMap();

              const name = propertiesPb?.getName() as string;
              const desc = propertiesPb?.getDesc() as string;
              const stat = propertiesPb?.getStat() as string;
              const organizationId = metaPb.get(key.OrganizationID);
              const id = metaPb.get(key.TimelineID);

              const timeline: ITimeline = {
                name: name,
                desc: desc,
                stat: stat,
                organizationId: organizationId,
                id: id,
                userId: '',
                isCurrent: false,
              };
              return timeline;
            },
          );
          resolve(timelines);
        }
      });
    },
  );
  return getSearchResponsePb;
}
