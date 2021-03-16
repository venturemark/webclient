import {
  CreateI,
  CreateI_Obj,
  CreateO,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Link,
} from "module/api/venture/proto/create_pb";
import { APIClient } from "module/api/venture/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/idkeys";
import { ICreateVenture } from "module/interface/venture";

export async function Create(createVenture: ICreateVenture): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const objLink = new CreateI_Obj_Property_Link();
  const objList = [];
  const objLinkList = [];

  const token = createVenture.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objLink.setAddr(createVenture.url);
  objLink.setText(createVenture.name);
  objLinkList.push(objLink);

  objProperty.setName(createVenture.name);
  objProperty.setDesc(createVenture.desc);
  objProperty.setLinkList(objLinkList);

  obj.setProperty(objProperty);

  objList.push(obj);
  req.setObjList(objList);

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const venturePbList = res.getObjList();
        const venturePbObject = venturePbList[0];
        const metaPb = venturePbObject?.getMetadataMap();
        const ventureId = metaPb.get(key.VentureID);
        resolve(ventureId);
      }
    });
  });

  return getCreateResponsePb;
}
