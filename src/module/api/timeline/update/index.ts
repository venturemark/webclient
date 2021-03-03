import {
  UpdateI,
  UpdateI_Obj,
  UpdateO_Obj,
  UpdateI_Obj_Property,
} from "module/api/timeline/proto/update_pb";
import { APIClient } from "module/api/timeline/proto/ApiServiceClientPb";
import * as env from "module/env";
import { ITimeline, ITimelineUpdate } from "module/interface/timeline/index";
import * as key from "module/idkeys";

export async function Update(
  timelineUpdate: ITimelineUpdate
): Promise<ITimeline[]> {
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  const obj = new UpdateI_Obj();
  const objProperty = new UpdateI_Obj_Property();

  if (timelineUpdate.stat) {
    objProperty.setStat(timelineUpdate.stat);
  }
  if (timelineUpdate.name) {
    objProperty.setName(timelineUpdate.name);
  }
  if (timelineUpdate.desc) {
    objProperty.setDesc(timelineUpdate.desc);
  }

  obj.getMetadataMap().set(key.OrganizationID, timelineUpdate.organizationId);
  obj.getMetadataMap().set(key.ventureID, timelineUpdate.ventureId);
  obj.getMetadataMap().set(key.UserID, timelineUpdate.userId);
  obj.getMetadataMap().set(key.TimelineID, timelineUpdate.id);
  obj.setProperty(objProperty);
  req.setObj(obj);

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
