import * as env from 'module/env';
import {
  CreateI,
  CreateI_Obj,
  CreateI_Obj_Property,
} from 'module/api/texupd/proto/create_pb';
import { APIClient } from 'module/api/texupd/proto/ApiServiceClientPb';
import {INewUpdate} from 'module/interface/update'

const AUDIENCEIDKEY = 'audience.venturemark.co/id';
const ORGANIZATIONIDKEY = 'organization.venturemark.co/id';
const TIMELINEIDKEY = "timeline.venturemark.co/id";
const USERIDKEY = 'user.venturemark.co/id';


export async function Create(
  newUpdate: INewUpdate,
): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  objProperty.setText(newUpdate.text);
  obj.getMetadataMap().set(AUDIENCEIDKEY, newUpdate.audienceId);
  obj.getMetadataMap().set(ORGANIZATIONIDKEY, newUpdate.organizationId);
  obj.getMetadataMap().set(USERIDKEY, newUpdate.timelineId);
  obj.getMetadataMap().set(TIMELINEIDKEY, newUpdate.userId);
  obj.setProperty(objProperty);

  req.setObj(obj);

  console.log('object to be created:', req);
//     {
//         "obj": {
//             "metadata": {
//                 "audience.venturemark.co/id": "<id>",
//                 "organization.venturemark.co/id": "<id>",
//                 "timeline.venturemark.co/id": "<id>",
//                 "user.venturemark.co/id": "<id>"
//             },
//             "property": {
//                 "text": "Lorem ipsum ..."
//             }
//         }
//     }

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
