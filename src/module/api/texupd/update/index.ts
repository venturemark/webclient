import {
  UpdateI,
  UpdateI_Obj,
  UpdateO,
  UpdateI_Obj_Jsnpatch,
} from "module/api/texupd/proto/update_pb";
import { APIClient } from "module/api/texupd/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IUpdate, IUpdateUpdate } from "module/interface/update/";
import * as key from "module/apikeys";

export async function Update(updateUpdate: IUpdateUpdate): Promise<IUpdate[]> {
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

  objJsnPatch.setOpe("replace");
  objJsnPatch.setPat("/obj/property/text");
  objJsnPatch.setVal(updateUpdate.text);
  patchList.push(objJsnPatch);

  obj.setJsnpatchList(patchList);
  objList.push(obj);

  req.setObjList(objList);

  const getUpdateResponsePb: IUpdate[] = await new Promise(
    (resolve, reject) => {
      client.update(req, metadata, function (err: any, res: UpdateO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const updatePb = res.getObjList()[0];
          const metaPb = updatePb.getMetadataMap();
          const status = metaPb.get(key.UpdateStatus);

          resolve(status);
        }
      });
    }
  );
  return getUpdateResponsePb;
}
