import {
  UpdateI,
  UpdateI_Obj,
  UpdateO_Obj,
  UpdateI_Obj_Jsnpatch,
} from "module/api/timeline/proto/update_pb";
import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import * as env from "module/env";
import { ITimeline, ITimelineUpdate } from "module/interface/timeline/index";
import * as key from "module/apikeys";

export async function Update(
  timelineUpdate: ITimelineUpdate
): Promise<ITimeline[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const descriptionObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const statObjJsnPatch = new UpdateI_Obj_Jsnpatch();
  const objList = [];
  const patchList = [];

  obj.getMetadataMap().set(key.OrganizationID, timelineUpdate.ventureId);
  obj.getMetadataMap().set(key.VentureID, timelineUpdate.ventureId);
  obj.getMetadataMap().set(key.TimelineID, timelineUpdate.id);

  if (timelineUpdate.stat) {
    statObjJsnPatch.setOpe("replace");
    statObjJsnPatch.setPat("/obj/property/stat");
    statObjJsnPatch.setVal(timelineUpdate.stat);
  }
  if (timelineUpdate.name) {
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/name");
    nameObjJsnPatch.setVal(timelineUpdate.name);
  }
  if (timelineUpdate.desc) {
    descriptionObjJsnPatch.setOpe("replace");
    descriptionObjJsnPatch.setPat("/obj/property/desc");
    descriptionObjJsnPatch.setVal(timelineUpdate.desc);
  }

  patchList.push(nameObjJsnPatch);
  patchList.push(descriptionObjJsnPatch);

  obj.setJsnpatchList(patchList);

  objList.push(obj);
  req.setObjList(objList);

  const getUpdateResponsePb: ITimeline[] = await new Promise(
    (resolve, reject) => {
      client.update(req, {}, function (err: any, res: any): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const timelinePb: UpdateO_Obj = res.getObj();
          const metaPb = timelinePb.getMetadataMap();
          const status = metaPb.get(key.TimelineStatus);

          resolve(status);
        }
      });
    }
  );
  return getUpdateResponsePb;
}
