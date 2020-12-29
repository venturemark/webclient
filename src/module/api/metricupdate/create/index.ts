import apigents from "@venturemark/apigents";
import {
  CreateI_Obj,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Data,
} from "module/api/metricupdate/proto/create_pb";
import * as env from "module/env";

export function Create(
  text: string,
  value: number,
  userId: string,
  timelineId: string,
  userIdKey: string,
  userIdvalue: string
): any {
  {
    const client = new apigents.Timeline.Client(env.APIEndpoint());
    const req = new apigents.Timeline.Create.I();

    const obj = new CreateI_Obj();
    const objProperty = new CreateI_Obj_Property();
    const dataObj = new CreateI_Obj_Property_Data();
    const dataObjValue = [];
    dataObjValue.push(value);

    dataObj.setSpace("y");
    dataObj.setValue(dataObjValue);
    objProperty.setText(text);
    objProperty.setData(dataObj);
    obj.getMetadataMap().set(timelineId, userId);
    obj.getMetadataMap().set(userIdKey, userIdvalue);
    obj.setProperty(objProperty);

    req.setObj(obj);
    // format
    //
    // obj: {
    //   metadata: {
    //     "timeline.venturemark.co/id": "1606488079",
    //     "user.venturemark.co/id": "usr-al9qy",
    //   },
    //   property: { data: [{ space: "y", value: [23] }], text: "foo bar baz" },
    // },

    client.create(req, {}, function (err: any, res: any) {
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
