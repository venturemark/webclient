import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/timeline/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { ITimeline, IUpdateTimeline } from "module/interface/timeline";

export async function Update(
  updateTimeline: IUpdateTimeline
): Promise<ITimeline[]> {
  const token = updateTimeline.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const descriptionObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const statObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.TimelineID, updateTimeline.id);
  obj.getMetadataMap().set(key.VentureID, updateTimeline.ventureId);

  if (updateTimeline.stat) {
    statObjJsnPatch.setOpe("replace");
    statObjJsnPatch.setPat("/obj/property/stat");
    statObjJsnPatch.setVal(updateTimeline.stat);
    patchList.push(statObjJsnPatch);
  }
  if (updateTimeline.name) {
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/name");
    nameObjJsnPatch.setVal(updateTimeline.name);
    patchList.push(nameObjJsnPatch);
  }
  if (updateTimeline.desc) {
    descriptionObjJsnPatch.setOpe("replace");
    descriptionObjJsnPatch.setPat("/obj/property/desc");
    descriptionObjJsnPatch.setVal(updateTimeline.desc);
    patchList.push(descriptionObjJsnPatch);
  }

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const timelinePb = res.getObjList()[0];
        const metaPb = timelinePb.getMetadataMap();
        const status = metaPb.get(key.TimelineStatus);

        resolve(status as ITimeline[]);
      }
    });
  });
}
