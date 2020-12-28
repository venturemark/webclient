// import * as apigents from "@venturemark/apigents";
import apigents from "@venturemark/apigents";
import * as env from "module/env";

export function Search(payload: any) {
  {
    const client = new apigents.Update.Client(env.APIEndpoint());

    const req = new apigents.Update.Search.I();
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
