import * as env from "module/env";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
} from "module/api/message/proto/create_pb";
import * as key from "module/apikeys";
import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import { ICreateMessage } from "module/interface/message";

export async function Create(createMessage: ICreateMessage): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  const objList = [];

  const token = createMessage.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objProperty.setText(createMessage.text);
  obj.getMetadataMap().set(key.VentureID, createMessage.ventureId);
  obj.getMetadataMap().set(key.TimelineID, createMessage.timelineId);
  obj.getMetadataMap().set(key.UpdateID, createMessage.updateId);
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
