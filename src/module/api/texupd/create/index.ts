import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Link,
  CreateO,
} from "module/api/texupd/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ICreateUpdate } from "module/interface/update";

export async function Create(createUpdate: ICreateUpdate): Promise<string> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const objList = [];

  const token = createUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objProperty.setText(createUpdate.text);
  objProperty.setHead(createUpdate.title);
  obj.getMetadataMap().set(key.VentureID, createUpdate.ventureId);
  obj.getMetadataMap().set(key.TimelineID, createUpdate.timelineId);
  obj.getMetadataMap().set(key.UpdateFormat, "slate");
  obj.setProperty(objProperty);

  if (createUpdate.image) {
    const objLinkList = [];
    const objLink = new CreateI_Obj_Property_Link();
    objLink.setAddr(createUpdate.image);
    objLink.setText("attached image");
    objLinkList.push(objLink);
    objProperty.setLinkList(objLinkList);
  }

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<string>((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        const updatePbList = res.getObjList();
        const updatePb = updatePbList[0];
        const metaPb = updatePb?.getMetadataMap();
        const updateId = metaPb.get(key.UpdateID) as string;

        resolve(updateId);
      }
    });
  });
}
