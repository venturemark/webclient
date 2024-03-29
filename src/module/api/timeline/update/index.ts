import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import {
  UpdateI,
  UpdateI_Obj,
  UpdateI_Obj_Jsnpatch,
  UpdateO,
} from "module/api/timeline/proto/update_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { UpdateStatus } from "module/interface/api";
import { IUpdateTimeline } from "module/interface/timeline";

export async function Update(
  updateTimeline: IUpdateTimeline
): Promise<UpdateStatus[]> {
  const token = updateTimeline.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();

  obj.getMetadataMap().set(key.TimelineID, updateTimeline.id);
  obj.getMetadataMap().set(key.VentureID, updateTimeline.ventureId);

  const patchList = [];

  if (updateTimeline.stat) {
    const statObjJsnPatch = new UpdateI_Obj_Jsnpatch();
    statObjJsnPatch.setOpe("replace");
    statObjJsnPatch.setPat("/obj/property/stat");
    statObjJsnPatch.setVal(updateTimeline.stat);
    patchList.push(statObjJsnPatch);
  }

  if (updateTimeline.name) {
    const nameObjJsnPatch = new UpdateI_Obj_Jsnpatch();
    nameObjJsnPatch.setOpe("replace");
    nameObjJsnPatch.setPat("/obj/property/name");
    nameObjJsnPatch.setVal(updateTimeline.name);
    patchList.push(nameObjJsnPatch);
  }

  if (updateTimeline.desc) {
    const descriptionObjJsnPatch = new UpdateI_Obj_Jsnpatch();
    descriptionObjJsnPatch.setOpe("replace");
    descriptionObjJsnPatch.setPat("/obj/property/desc");
    descriptionObjJsnPatch.setVal(updateTimeline.desc);
    patchList.push(descriptionObjJsnPatch);
  }

  if (updateTimeline.icon !== undefined) {
    const iconObjJsnPatch = new UpdateI_Obj_Jsnpatch();
    iconObjJsnPatch.setOpe(
      updateTimeline.previous?.icon !== undefined ? "replace" : "add"
    );
    iconObjJsnPatch.setPat(
      `/obj/metadata/${key.TimelineIcon.replace("/", "~1")}`
    );
    iconObjJsnPatch.setVal(updateTimeline.icon);
    patchList.push(iconObjJsnPatch);
  }

  if (updateTimeline.membersWrite !== undefined) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe(
      updateTimeline.previous?.membersWrite !== undefined ? "replace" : "add"
    );
    patch.setPat(`/obj/metadata/${key.PermissionModel.replace("/", "~1")}`);
    patch.setVal(updateTimeline.membersWrite ? "writer" : "reader");
    patchList.push(patch);
  }

  if (updateTimeline.visibility !== undefined) {
    const patch = new UpdateI_Obj_Jsnpatch();
    patch.setOpe(
      updateTimeline.previous?.visibility !== undefined ? "replace" : "add"
    );
    patch.setPat(`/obj/metadata/${key.ResourceVisibility.replace("/", "~1")}`);
    patch.setVal(updateTimeline.visibility);
    patchList.push(patch);
  }

  obj.setJsnpatchList(patchList);
  req.setObjList([obj]);

  return new Promise((resolve, reject) => {
    client.update(req, metadata, function (err: any, res: UpdateO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.TimelineStatus) as UpdateStatus;
          })
        );
      }
    });
  });
}
