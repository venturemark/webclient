// import * as apigents from "@venturemark/apigents";
import APIGENTS from "@venturemark/apigents";
import * as env from "module/env";
import * as spec from "./spec";

export function Search(payload: spec.Req): spec.Res {
  {
    const client = new APIGENTS.Update.Client(env.APIEndpoint());

    const req = new APIGENTS.Update.Search.I();
    // TODO use proper types for the search input

    req.setObjList(payload);

    console.log("req instantiation: ", req);

    client.search(req, {}, function (err: any, res: any) {
      if (err) {
        console.log(err);
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(res);
      }
    });
  }

  return null;
}
