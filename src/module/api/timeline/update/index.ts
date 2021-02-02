import {
  UpdateI,
  UpdateI_Obj,
  UpdateO_Obj,
  UpdateI_Obj_Property,
} from 'module/api/timeline/proto/update_pb';
import { APIClient } from 'module/api/timeline/proto/ApiServiceClientPb';
import * as env from 'module/env';
import {
  ITimeline,
  ITimelineUpdate,
} from 'module/interface/timeline/index';
import * as key from 'module/idkeys';

export async function Update(
  timelineUpdate: ITimelineUpdate,
): Promise<ITimeline[]> {
  const objList = [];
  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new UpdateI();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.

  const obj = new UpdateI_Obj();
  const objProperty = new UpdateI_Obj_Property();

  objProperty.setStat(timelineUpdate.state)
  objProperty.setName(timelineUpdate.state)
  objProperty.setDesc(timelineUpdate.state)


  obj
    .getMetadataMap()
    .set(key.OrganizationID, timelineUpdate.organizationId);
  obj.getMetadataMap().set(key.UserID, timelineUpdate.userId);
  obj.getMetadataMap().set(key.UserID, timelineUpdate.timelineId);
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
          const timelinesPb = res.getObjList();

          const timelines = timelinesPb.map(
            (timelinePb: UpdateO_Obj) => {
              const propertiesPb = timelinePb.getProperty();
              const metaPb = timelinePb.getMetadataMap();

              const name = propertiesPb?.getName() as string;
              const desc = propertiesPb?.getDesc() as string;
              const stat = propertiesPb?.getStat() as string;
              const organizationId = metaPb.get(key.OrganizationID);
              const id = metaPb.get(key.TimelineID);

              const timeline: ITimeline = {
                name: name,
                desc: desc,
                stat: stat,
                organizationId: organizationId,
                id: id,
                userId: '',
                isCurrent: false,
              };
              return timeline;
            },
          );
          resolve(timelines);
        }
      });
    },
  );
  return getUpdateResponsePb;
}
