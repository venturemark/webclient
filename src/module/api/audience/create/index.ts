import * as apigents from "@venturemark/apigents";
import {
  CreateI_Obj,
  CreateI_Obj_Property,
} from "module/api/audience/proto/create_pb";
import * as env from "module/env";

const USERIDKEY = "user.venturemark.co/id";
const ORGANIZATIONIDKEY = "organization.venturemark.co/id";

export async function Create(
  name: string,
  userId: string,
  organizationId: string
): Promise<any> {
  const client = new apigents.Audience.Client(env.APIEndpoint());
  const req = new apigents.Audience.Create.I();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const userList = [];
  userList.push(userId);

  objProperty.setName(name);
  objProperty.setUserList(userList); // I'm not sure how we're supposed to manage members of an audience.
  obj.getMetadataMap().set(USERIDKEY, userId);
  obj.getMetadataMap().set(ORGANIZATIONIDKEY, organizationId);
  obj.setProperty(objProperty);

  req.setObj(obj);

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        alert(
          `Error code: ${err.code}, Something went wrong, please email tim@venturemark.co or marcus@venturemark.co`
        );
        reject(err);
      } else {
        resolve(res.toObject().obj.metadataMap[0][1]);
      }
    });
  });

  return getCreateResponsePb;
}
