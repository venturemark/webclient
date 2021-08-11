import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Link,
  CreateO,
} from "module/api/venture/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ICreateVenture } from "module/interface/venture";

export async function Create(createVenture: ICreateVenture) {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const objLink = new CreateI_Obj_Property_Link();
  const objList = [];
  const objLinkList = [];

  const token = createVenture.token;
  const metadata = { Authorization: `Bearer ${token}` };

  if (createVenture.url) {
    objLink.setAddr(createVenture.url);
    objLink.setText(createVenture.name);
    objLinkList.push(objLink);
    objProperty.setLinkList(objLinkList);
  }

  objProperty.setName(createVenture.name);
  objProperty.setDesc(createVenture.desc);

  obj.setProperty(objProperty);

  obj
    .getMetadataMap()
    .set(key.PermissionModel, createVenture.membersWrite ? "writer" : "reader");

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<string>((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        const venturePbList = res.getObjList();
        const venturePbObject = venturePbList[0];
        const metaPb = venturePbObject?.getMetadataMap();
        const ventureId = metaPb.get(key.VentureID)!;
        resolve(ventureId);
      }
    });
  });
}
