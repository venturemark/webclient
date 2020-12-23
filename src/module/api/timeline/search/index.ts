import apigents from "@venturemark/apigents";
import * as env from "module/env";
import * as spec from "./spec";

type DataField = {
  [key: string]: string;
};

type ChunkingObject = {
  perpage: number;
  pointer: number;
};

type ApiObject = {
  chunking: ChunkingObject;
};

type DataObject = {
  metadata: DataField;
};

export interface TimelineSearchI {
  api?: ApiObject;
  obj: DataObject[];
}

export interface TimelineSearchO {
  api?: ApiObject;
  obj: DataObject[];
}

export function Search(request: TimelineSearchI): TimelineSearchO | null {
  {
    const client = new apigents.Timeline.Client(env.APIEndpoint());
    const req = new apigents.Timeline.Search.I();

    req.setObjList(request);

    client.search(req, {}, function (err: any, res: TimelineSearchO) {
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
