import apigents from "@venturemark/apigents";
import { CreateI_Obj, CreateI_Obj_Property } from "../proto/create_pb";
import * as env from "module/env";
import * as spec from "./spec";

export function Create(
  name: string,
  userId: string,
  timelineId: string
): spec.Res {
  {
    const client = new apigents.Timeline.Client(env.APIEndpoint());
    const req = new apigents.Timeline.Create.I();

    const obj = new CreateI_Obj();
    const objProperty = new CreateI_Obj_Property();

    objProperty.setName(name);
    obj.getMetadataMap().set(timelineId, userId);
    obj.setProperty(objProperty);

    req.setObj(obj);

    client.create(req, {}, function (err: any, res: spec.Res) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(res.toObject());
      }
    });
  }

  return null;
}
