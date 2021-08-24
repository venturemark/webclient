import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/texupd/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { UpdateStatus } from "module/interface/api";
import { IUpdateUpdate } from "module/interface/update";

export async function Update(
  updateUpdate: IUpdateUpdate
): Promise<UpdateStatus[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const objJsnPatch = new UpdateI_Obj_Jsnpatch();

  const token = updateUpdate.token;
  const metadata = { Authorization: `Bearer ${token}` };

  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.TimelineID, updateUpdate.timelineId);
  obj.getMetadataMap().set(key.VentureID, updateUpdate.ventureId);
  obj.getMetadataMap().set(key.UpdateID, updateUpdate.id);
  obj.getMetadataMap().set(key.UpdateFormat, "slate");

  objJsnPatch.setOpe("replace");
  objJsnPatch.setPat("/obj/property/text");
  objJsnPatch.setVal(updateUpdate.text);
  patchList.push(objJsnPatch);

  obj.setJsnpatchList(patchList);
  objList.push(obj);

  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.UpdateStatus) as UpdateStatus;
          })
        );
      }
    });
  });
}
