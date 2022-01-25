import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateO,
} from "module/api/message/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ICreateMessage } from "module/interface/message";

export async function Create(createMessage: ICreateMessage): Promise<string[]> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  const objList = [];

  const token = createMessage.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  objProperty.setText(createMessage.text);
  obj.getMetadataMap().set(key.VentureID, createMessage.ventureId);
  obj.getMetadataMap().set(key.TimelineID, createMessage.timelineId);
  obj.getMetadataMap().set(key.UpdateID, createMessage.updateId);
  obj.setProperty(objProperty);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        resolve(
          res.getObjList().map((messagePb) => {
            const metaPb = messagePb.getMetadataMap();
            return metaPb.get(key.MessageID)!;
          })
        );
      }
    });
  });
}
