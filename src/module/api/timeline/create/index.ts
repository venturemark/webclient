import {
  CreateI,
  CreateI_Obj,
  CreateO,
  CreateI_Obj_Property,
} from "module/api/timeline/proto/create_pb";
import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import * as env from "module/env";
import * as key from "module/apikeys";
import { ICreateTimeline } from "module/interface/timeline";

export async function Create(newTimeline: ICreateTimeline): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const objList = [];

  const token = newTimeline.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objProperty.setName(newTimeline.name);
  objProperty.setDesc(newTimeline.desc);
  obj.getMetadataMap().set(key.VentureID, newTimeline.ventureId);
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
        const timelinePbList = res.getObjList();
        const timelinePbObject = timelinePbList[0];
        const metaPb = timelinePbObject?.getMetadataMap();
        const timelineId = metaPb.get(key.TimelineID);

        resolve(timelineId);
      }
    });
  });

  return getCreateResponsePb;
}
