import {
  SearchI,
  SearchI_Obj,
  SearchO_Obj,
} from "module/api/update/proto/search_pb";
import { APIClient } from "module/api/update/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/idkeys";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNow } from "date-fns";
import { IUpdateQuery } from "module/interface/update";

export async function Search(updateQuery: IUpdateQuery) {
  const objList = [];

  const token = updateQuery.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.OrganizationID, updateQuery.organizationId);
  obj.getMetadataMap().set(key.TimelineID, updateQuery.timelineId);
  obj.getMetadataMap().set(key.UserID, updateQuery.userId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const updatesPb = res.getObjList();

        const updates = updatesPb.map((updatePb: SearchO_Obj) => {
          const propertyPb = updatePb.getProperty();
          const metaPb = updatePb.getMetadataMap();

          const text = propertyPb?.toObject().text;

          const organizationId = metaPb.get(key.OrganizationID);
          const timelineId = metaPb.get(key.TimelineID);
          const updateId = metaPb.get(key.UpdateID);
          const userId = metaPb.get(key.UserID);
          const rawDate = fromUnixTime(updateId / 1000000000);
          const date = formatDistanceToNow(rawDate) + " ago";

          const update: any = {
            organizationId: organizationId,
            timelineId: timelineId,
            userId: userId,
            id: updateId,
            text: text,
            date: date,
          };
          return update;
        });
        resolve(updates);
      }
    });
  });

  return getSearchResponsePb;
}
