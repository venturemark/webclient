import * as apigents from "@venturemark/apigents";
import * as env from "module/env";
import * as spec from "./spec";

export function Search(req: spec.Req): spec.Res {
  // {
  //   const client = new apigents.Update.Client(env.APIEndpoint());
  //
  //   const req = new apigents.Update.Search.I();
  //   // TODO use proper types for the search input
  //   req.setObjList([
  //     {
  //       metadata: {
  //         "timeline.venturemark.co/id": "1606396471", // TODO set this dynamically
  //         "user.venturemark.co/id": "usr-al9qy", // TODO set this dynamically
  //       },
  //     },
  //   ]);
  //
  //   client.search(req, {}, function (err: any, res: spec.Res) {
  //     if (err) {
  //       console.log(err.code);
  //       console.log(err.message);
  //     } else {
  //       console.log(res);
  //     }
  //   });
  // }

  return null;
}
