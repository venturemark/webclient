import * as apigents from '@venturemark/apigents';
import { SearchI_Obj } from 'module/api/timeline/proto/search_pb';
import { SearchO_Obj } from 'module/api/timeline/proto/search_pb';
import * as env from 'module/env';
import { ITimeline } from 'module/interface/timeline/index';
import * as key from 'module/idkeys';

export async function Search(
  userId: string,
  organizationId: string,
  audienceId: string,
): Promise<ITimeline[]> {
  const objList = [];
  //instantiate client and req classes
  const client = new apigents.Timeline.Client(env.APIEndpoint());
  const req = new apigents.Timeline.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.

  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.UserID, userId);
  obj.getMetadataMap().set(key.OrganizationID, organizationId);
  obj.getMetadataMap().set(key.AudienceID, audienceId);
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
              const propertyPb = timelinePb.getProperty();
              console.log(propertyPb?.toObject());
              const name = propertyPb?.toObject().name as string;
              const desc = propertyPb?.toObject().desc as string;
              const stat = propertyPb?.toObject().stat as string;
              // do not assume order?
              // do not assume input and output have same structure
              // do not work with indices
              console.log("Meta data timeline", timelinePb
          .getMetadataMap()
          .toObject())
              const organizationId = timelinePb
                .getMetadataMap()
                .toObject()[0][1] as string;
              const timelineId = timelinePb
                .getMetadataMap()
                .toObject()[1][1] as string;

              console.log(timelinePb.getMetadataMap().toObject());

              const timeline: any = {
                name: name,
                desc: desc,
                stat: stat,
                organizationId: organizationId,
                timelineId: timelineId,
                isCurrent: false,
                updates: [],
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
