import * as env from "module/env";
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
} from "module/api/texupd/proto/create_pb";
import * as key from "module/idkeys";
import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import { INewUpdate } from "module/interface/update";

export async function Create(newUpdate: INewUpdate): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  const token = newUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  objProperty.setText(newUpdate.text);
  obj.getMetadataMap().set(key.OrganizationID, newUpdate.organizationId);
  obj.getMetadataMap().set(key.ventureID, newUpdate.ventureId);
  obj.getMetadataMap().set(key.TimelineID, newUpdate.timelineId);
  obj.getMetadataMap().set(key.UserID, newUpdate.userId);
  obj.setProperty(objProperty);

  req.setObj(obj);

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, metadata, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const updatePb = res.getObj();
        const metaPb = updatePb?.getMetadataMap();
        const updateId = metaPb.get(key.UpdateID);

        resolve(updateId);
      }
    });
  });

  return getCreateResponsePb;
}
