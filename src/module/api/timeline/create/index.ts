import * as apigents from '@venturemark/apigents';
import {
  CreateI_Obj,
  CreateI_Obj_Property,
} from 'module/api/timeline/proto/create_pb';
import * as env from 'module/env';
import * as key from 'module/idkeys';
import { INewTimeline } from 'module/interface/timeline';

export async function Create(
  newTimeline: INewTimeline,
): Promise<any> {
  const client = new apigents.Timeline.Client(env.APIEndpoint());
  const req = new apigents.Timeline.Create.I();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  objProperty.setName(newTimeline.name);
  objProperty.setDesc(newTimeline.desc);
  obj.getMetadataMap().set(key.UserID, newTimeline.userId);
  obj
    .getMetadataMap()
    .set(key.OrganizationID, newTimeline.organizationId);
  obj.getMetadataMap().set(key.AudienceID, newTimeline.audienceId);
  obj.setProperty(objProperty);

  req.setObj(obj);

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        alert(
          `Error code: ${err.code}, Something went wrong, please email tim@venturemark.co or marcus@venturemark.co`,
        );
        reject(err);
      } else {
        resolve(res.toObject().obj.metadataMap[0][1]);
      }
    });
  });

  return getCreateResponsePb;
}
