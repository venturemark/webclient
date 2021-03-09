import * as env from "module/env";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
} from "module/api/message/proto/create_pb";
import * as key from "module/idkeys";
import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import { INewMessage } from "module/interface/message";

export async function Create(newMessage: INewMessage): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  const objList = [];

  const token = newMessage.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objProperty.setText(newMessage.text);
  obj.getMetadataMap().set(key.OrganizationID, newMessage.ventureId);
  obj.getMetadataMap().set(key.VentureID, newMessage.ventureId);
  obj.getMetadataMap().set(key.TimelineID, newMessage.timelineId);
  obj.getMetadataMap().set(key.UpdateID, newMessage.updateId);
  obj.getMetadataMap().set(key.UserID, newMessage.userId);
  obj.setProperty(objProperty);

  objList.push(obj);
  req.setObjList(objList);

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const messagePb = res.getObj();
        const metaPb = messagePb?.getMetadataMap();
        const messageId = metaPb.get(key.MessageID);

        resolve(messageId);
      }
    });
  });

  return getCreateResponsePb;
}
