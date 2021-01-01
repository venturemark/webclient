import apigents from "@venturemark/apigents";
import { SearchI_Obj, SearchO_Obj } from "module/api/update/proto/search_pb";
import * as env from "module/env";
import { IUpdate } from "module/interface/update/index";

export async function Search(
  timelineIdKey: string,
  timelineIdvalue: string,
  userIdKey: string,
  userIdvalue: string
) {
  const objList = [];

  //instantiate client and req classes
  const client = new apigents.Update.Client(env.APIEndpoint());
  const req = new apigents.Update.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(timelineIdKey, timelineIdvalue);
  obj.getMetadataMap().set(userIdKey, userIdvalue);
  objList.push(obj);
  req.setObjList(objList);
  console.log(req);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const updatesPb = res.getObjList();

        const updates = updatesPb.map((updatePb: SearchO_Obj) => {
          const updatePbObj = updatePb.toObject();
          console.log(updatePbObj);
          const propertyPb = updatePb.getProperty();
          const text = propertyPb?.toObject().text;
          console.log(text);
          const timelineId = updatePb
            .getMetadataMap()
            .toObject()[0][1] as string;
          const updateId = updatePb.getMetadataMap().toObject()[1][1] as string;
          const userId = updatePb.getMetadataMap().toObject()[2][1] as string;

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
