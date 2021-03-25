import {
  SearchI,
  SearchI_Obj,
  SearchO_Obj,
} from "module/api/message/proto/search_pb";
import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/apikeys";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNowStrict } from "date-fns";
import { IMessage, ISearchMessage } from "module/interface/message";

export async function Search(searchMessage: ISearchMessage) {
  const objList = [];
  const token = searchMessage.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.VentureID, searchMessage.ventureId);
  obj.getMetadataMap().set(key.TimelineID, searchMessage.timelineId);
  obj.getMetadataMap().set(key.UpdateID, searchMessage.updateId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const messagesPb = res.getObjList();

        const messages = messagesPb.map((messagePb: SearchO_Obj) => {
          const propertyPb = messagePb.getProperty();
          const metaPb = messagePb.getMetadataMap();

          const text = propertyPb?.toObject().text ?? "";
          const reid = propertyPb?.toObject().reid ?? "";

          const ventureId = metaPb.get(key.VentureID);
          const timelineId = metaPb.get(key.TimelineID);
          const id = metaPb.get(key.MessageID);
          const updateId = metaPb.get(key.UpdateID);
          const userId = metaPb.get(key.UserID);
          const subjectId = metaPb.get(key.SubjectID);
          const rawDate = fromUnixTime(id / 1000000000);
          const date = formatDistanceToNowStrict(rawDate) + " ago";

          const message: IMessage = {
            ventureId,
            timelineId,
            updateId,
            userId,
            subjectId,
            id,
            text,
            date,
            reid,
          };
          return message;
        });
        resolve(messages);
      }
    });
  });

  return getSearchResponsePb;
}
