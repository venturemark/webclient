import * as apigents from '@venturemark/apigents';
import {
  SearchI_Obj,
  SearchO_Obj,
} from 'module/api/update/proto/search_pb';
import * as env from 'module/env';
import * as key from 'module/idkeys';

export async function Search(
  organizationId: string,
  timelineId: string,
  userId: string,
) {
  const objList = [];

  //instantiate client and req classes
  const client = new apigents.Update.Client(env.APIEndpoint());
  const req = new apigents.Update.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.OrganizationID, organizationId);
  obj.getMetadataMap().set(key.TimelineID, timelineId);
  obj.getMetadataMap().set(key.UserID, userId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const updatesPb = res.getObjList();

        const updates = updatesPb.map((updatePb: SearchO_Obj) => {
          const propertyPb = updatePb.getProperty();
          const text = propertyPb?.toObject().text;

          console.log("Meta data", updatePb
          .getMetadataMap()
          .toObject())
          const organizationId = updatePb
            .getMetadataMap()
            .toObject()[0][1] as string;
          const timelineId = updatePb
            .getMetadataMap()
            .toObject()[1][1] as string;
          const updateId = updatePb
            .getMetadataMap()
            .toObject()[2][1] as string;
          

          const update: any = {
            organizationId: organizationId,
            timelineId: timelineId,
            updateId: updateId,
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
