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
        console.log("we're getting updates!", updatesPb);

        const updates = updatesPb.map((updatePb: SearchO_Obj) => {
          const propertyPb = updatePb.getProperty();
          const metaPb = updatePb.getMetadataMap();

          const text = propertyPb?.toObject().text;

          const organizationId = metaPb.get(key.OrganizationID);
          const timelineId = metaPb.get(key.TimelineID);
          const updateId = metaPb.get(key.UpdateID);

          const update: any = {
            organizationId: organizationId,
            timelineId: timelineId,
            updateId: updateId,
            text: text,
          };
          return update;
        });
        resolve(updates);
      }
    });
  });

  return getSearchResponsePb;
}
