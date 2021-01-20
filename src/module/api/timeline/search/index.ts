import * as apigents from "@venturemark/apigents";
import { SearchI_Obj } from "module/api/timeline/proto/search_pb";
import { SearchO_Obj } from "module/api/timeline/proto/search_pb";
import * as env from "module/env";
import { ITimeline } from "module/interface/timeline/index";

export async function Search(
  userIdKey: string,
  userIdValue: string
): Promise<ITimeline[]> {
  const objList = [];
  //instantiate client and req classes
  const client = new apigents.Timeline.Client(env.APIEndpoint());
  const req = new apigents.Timeline.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.

  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(userIdKey, userIdValue);
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

          const timelines = timelinesPb.map((timelinePb: SearchO_Obj) => {
            const propertyPb = timelinePb.getProperty();
            const name = propertyPb?.toObject().name;
            const timelineId = timelinePb
              .getMetadataMap()
              .toObject()[0][1] as string;
            const userId = timelinePb
              .getMetadataMap()
              .toObject()[1][1] as string;

            const timeline: ITimeline = {
              name: name as string,
              timelineId: timelineId,
              userId: userId,
              dataKey: name as string,
              isCurrent: false,
              updates: [],
              data: [],
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
