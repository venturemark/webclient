import * as apigents from "@venturemark/apigents";
import * as env from "module/env";
import * as spec from "./spec";

export function Search(req: spec.Req): spec.Res {
  {
    const client = new apigents.Update.Client(env.APIEndpoint());

    const req = new apigents.Update.Create.I();
    req.setName("create input");

    client.create(req, {}, function (err: any, response: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(response.getMessage());
      }
    });
  }

  return null;
}
