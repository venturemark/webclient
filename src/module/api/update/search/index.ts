import {
  SearchI,
  SearchI_Obj,
  SearchO,
} from "module/api/update/proto/search_pb";
import { APIClient } from "module/api/update/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/apikeys";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNowStrict } from "date-fns";
import { ISearchUpdate, IUpdate } from "module/interface/update";

export async function Search(searchUpdate: ISearchUpdate) {
  const objList = [];

  const token = searchUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.VentureID, searchUpdate.ventureId);
  obj.getMetadataMap().set(key.TimelineID, searchUpdate.timelineId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: SearchO) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const updatesPb = res.getObjList();

        const updates = updatesPb.map((updatePb) => {
          const propertyPb = updatePb.getProperty();
          const metaPb = updatePb.getMetadataMap();

          const text = propertyPb?.getText();
          const head = propertyPb?.getHead();

          const ventureId = metaPb.get(key.VentureID);
          const timelineId = metaPb.get(key.TimelineID);
          const updateId = metaPb.get(key.UpdateID);
          const userId = metaPb.get(key.UserID);
          const subjectId = metaPb.get(key.SubjectID);
          const rawDate = fromUnixTime(updateId / 1000000000);
          const date = formatDistanceToNowStrict(rawDate) + " ago";

          const update: IUpdate = {
            ventureId: ventureId,
            timelineId: timelineId,
            userId: userId,
            subjectId: subjectId,
            id: updateId,
            text: text,
            title: head,
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
