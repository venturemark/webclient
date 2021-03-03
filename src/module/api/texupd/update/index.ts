import {
  UpdateI,
  UpdateI_Obj,
  UpdateO_Obj,
  UpdateI_Obj_Property,
} from "module/api/texupd/proto/update_pb";
import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IUpdate, IUpdateUpdate } from "module/interface/update/";
import * as key from "module/idkeys";

export async function Update(updateUpdate: IUpdateUpdate): Promise<IUpdate[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const objProperty = new UpdateI_Obj_Property();

  if (updateUpdate.text) {
    objProperty.setText(updateUpdate.text);
  }

  obj.getMetadataMap().set(key.TimelineID, updateUpdate.timelineId);
  obj.getMetadataMap().set(key.OrganizationID, updateUpdate.ventureId);
  obj.getMetadataMap().set(key.ventureID, updateUpdate.ventureId);
  obj.getMetadataMap().set(key.UserID, updateUpdate.userId);
  obj.getMetadataMap().set(key.UpdateID, updateUpdate.id);
  obj.setProperty(objProperty);
  req.setObj(obj);

  const getUpdateResponsePb: IUpdate[] = await new Promise(
    (resolve, reject) => {
      client.update(req, {}, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const updatePb: UpdateO_Obj = res.getObj();
          const metaPb = updatePb.getMetadataMap();
          const status = metaPb.get(key.UpdateStatus);

          resolve(status);
        }
      });
    }
  );
  return getUpdateResponsePb;
}
