import apigents from "@venturemark/apigents";
import {
  CreateI_Obj,
  CreateO,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Data,
} from "module/api/metricupdate/proto/create_pb";
import * as env from "module/env";

export async function Create(
  text: string,
  value: number,
  timelineIdKey: string,
  timelineIdValue: string,
  userIdKey: string,
  userIdvalue: string
): Promise<any> {
  const client = new apigents.Metupd.Client(env.APIEndpoint());
  const req = new apigents.Metupd.Create.I();

  console.log(timelineIdValue);

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const dataObj = new CreateI_Obj_Property_Data();
  const dataObjValue = [];
  const dataObjArray = [];
  dataObjValue.push(value);
  dataObjArray.push(dataObj);

  dataObj.setSpace("y");
  dataObj.setValueList(dataObjValue);
  objProperty.setText(text);
  console.log("stringified text:", text);
  // objProperty.setText(
  //   "Here is a thing that is awesome and not that was proned from the start the be the best of the lot."
  // );
  objProperty.setDataList(dataObjArray);
  obj.getMetadataMap().set(timelineIdKey, timelineIdValue);
  obj.getMetadataMap().set(userIdKey, userIdvalue);
  obj.setProperty(objProperty);

  req.setObj(obj);

  console.log("object to be created:", req);
  // format
  //
  // obj: {
  //   metadata: {
  //     "timeline.venturemark.co/id": "1606488079",
  //     "user.venturemark.co/id": "usr-al9qy",
  //   },
  //   property: { data: [{ space: "y", value: [23] }], text: "foo bar baz" },
  // },

  const getCreateResponsePb = await new Promise((resolve, reject) => {
    client.create(req, {}, function (err: any, res: CreateO) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const metricId = res.toObject().obj.metadataMap[0][1];
        const updateId = res.toObject().obj.metadataMap[1][1];
        const response = {
          metricId: metricId,
          updateId: updateId,
        };

        console.log(response);

        resolve(response);
      }
    });
  });

  return getCreateResponsePb;
}
