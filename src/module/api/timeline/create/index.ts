import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateO,
} from "module/api/timeline/proto/create_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ICreateTimeline } from "module/interface/timeline";

export async function Create(newTimeline: ICreateTimeline) {
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

  obj
    .getMetadataMap()
    .set(key.PermissionModel, newTimeline.membersWrite ? "writer" : "reader");

  objList.push(obj);
  req.setObjList(objList);

  return new Promise<string>((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: CreateO) {
      if (err) {
        reject(err);
      } else {
        const timelinePbList = res.getObjList();
        const timelinePbObject = timelinePbList[0];
        const metaPb = timelinePbObject?.getMetadataMap();
        const timelineId = metaPb.get(key.TimelineID)!;

        resolve(timelineId);
      }
    });
  });
}
