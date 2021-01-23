import * as apigents from '@venturemark/apigents';
import {
  SearchI_Obj,
  SearchO_Obj,
} from 'module/api/update/proto/search_pb';
import * as env from 'module/env';

const AUDIENCEIDKEY = 'audience.venturemark.co/id';
const ORGANIZATIONIDKEY = 'organization.venturemark.co/id';
const USERIDKEY = 'user.venturemark.co/id';
const TIMELINEIDKEY = "timeline.venturemark.co/id";


export async function Search(
  timelineIdKey: string,
  timelineIdvalue: string,
  userIdKey: string,
  userIdvalue: string,
) {
  const objList = [];

  //instantiate client and req classes
  const client = new apigents.Update.Client(env.APIEndpoint());
  const req = new apigents.Update.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(AUDIENCEIDKEY, timelineIdvalue);
  obj.getMetadataMap().set(ORGANIZATIONIDKEY, timelineIdvalue);
  obj.getMetadataMap().set(USERIDKEY, timelineIdvalue);
  obj.getMetadataMap().set(TIMELINEIDKEY, userIdvalue);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        alert(
          `Error code: ${err.code}, Something went wrong, please email tim@venturemark.co or marcus@venturemark.co`,
        );
        reject(err);
      } else {
        const updatesPb = res.getObjList();

        const updates = updatesPb.map((updatePb: SearchO_Obj) => {
          const propertyPb = updatePb.getProperty();
          const text = propertyPb?.toObject().text;
          const timelineId = updatePb
            .getMetadataMap()
            .toObject()[0][1] as string;
          const updateId = updatePb
            .getMetadataMap()
            .toObject()[1][1] as string;
          const userId = updatePb
            .getMetadataMap()
            .toObject()[2][1] as string;

          const update: any = {
            timelineId: timelineId,
            updateId: updateId,
            userId: userId,
            text: text,
            isFlipped: false,
            isContext: false,
          };
          return update;
        });
        resolve(updates);
      }
    });
  });

  return getSearchResponsePb;
}
