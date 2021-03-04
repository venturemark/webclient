import {
  SearchI,
  SearchI_Obj,
  SearchO_Obj,
} from "module/api/message/proto/search_pb";
import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/idkeys";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNow } from "date-fns";
import { IMessage, IMessageQuery } from "module/interface/message";

export async function Search(messageQuery: IMessageQuery) {
  const objList = [];
  const token = messageQuery.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(key.OrganizationID, messageQuery.ventureId);
  obj.getMetadataMap().set(key.VentureID, messageQuery.ventureId);
  obj.getMetadataMap().set(key.TimelineID, messageQuery.timelineId);
  obj.getMetadataMap().set(key.UpdateID, messageQuery.updateId);
  obj.getMetadataMap().set(key.UserID, messageQuery.userId);
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

          const organizationId = metaPb.get(key.OrganizationID);
          const timelineId = metaPb.get(key.TimelineID);
          const messageId = metaPb.get(key.MessageID);
          const userId = metaPb.get(key.UserID);
          const updateId = metaPb.get(key.UpdateID);
          const rawDate = fromUnixTime(messageId / 1000000000);
          const date = formatDistanceToNow(rawDate) + " ago";

          const message: IMessage = {
            ventureId: organizationId,
            timelineId: timelineId,
            userId: userId,
            updateId: updateId,
            id: messageId,
            text: text,
            date: date,
            reid: reid,
          };
          return message;
        });
        resolve(messages);
      }
    });
  });

  return getSearchResponsePb;
}
