import apigents from "@venturemark/apigents";
import * as env from "module/env";
import * as spec from "./spec";

export function Search(userId: string, username: string): spec.Res | null {
  {
    //instantiate classes
    const client = new apigents.Timeline.Client(env.APIEndpoint());
    const req = new apigents.Timeline.Search.I();

    console.log(apigents);

    //We don't have definitions in apigents library for SearchI_Obj?
    // const obj = new SearchI_Obj();
    const obj = {
      metadata: {
        "user.venturemark.co/id": "usr-al9qy",
      },
    };

    let requestObj = { obj: [] };

    // Set classes
    // obj.getMetadataMap().set("user.venturemark.co/id", "usr-al9qy");
    // not used because no SearchI_Obj class

    // @ts-ignore
    requestObj.obj.push(obj);

    req.setObjList(requestObj);
    // Structure should be: SearchI.obj.[0].SearchI_Obj
    //
    // or
    //
    // {
    //     "obj": [
    //         {
    //             "metadata": {
    //                 "user.venturemark.co/id": "usr-al9qy"
    //             }
    //         }
    //     ]
    // }

    console.log(req);

    client.search(req, {}, function (err: any, res: any) {
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
