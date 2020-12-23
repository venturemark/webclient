import APIGENTS from "@venturemark/apigents";
import * as env from "module/env";
import * as spec from "./spec";

export function Create(request: spec.Req): spec.Res {
  {
    const client = new APIGENTS.Timeline.Client(env.APIEndpoint());

    const req = new APIGENTS.Timeline.Create.I();
    // TODO use proper types for the create input
    req.setObj(request);

    client.create(req, {}, function (err: any, res: spec.Res) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(res);
      }
    });
  }

  return null;
}
