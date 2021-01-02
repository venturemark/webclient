import * as apigents from "@venturemark/apigents";
import {
  CreateI_Obj,
  CreateI_Obj_Property,
} from "module/api/timeline/proto/create_pb";
import * as env from "module/env";

export async function Create(name: string, userId: string): Promise<any> {
  const client = new apigents.Timeline.Client(env.APIEndpoint());
  const req = new apigents.Timeline.Create.I();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();

  objProperty.setName(name);
  obj.getMetadataMap().set("user.venturemark.co/id", userId);
  obj.setProperty(objProperty);

  req.setObj(obj);

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        console.log(res.toObject());
        resolve(res.toObject());
      }
    });
  });

  return getCreateResponsePb;
}
