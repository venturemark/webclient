import {
  CreateI,
  CreateI_Obj,
  CreateO,
  CreateI_Obj_Property,
  CreateI_Obj_Property_Data,
} from 'module/api/metricupdate/proto/create_pb';
import { APIClient } from 'module/api/update/proto/ApiServiceClientPb';
import * as env from 'module/env';

export async function Create(
  text: string,
  value: number,
  timelineIdKey: string,
  timelineIdValue: string,
  userIdKey: string,
  userIdvalue: string,
): Promise<any> {
  const client = new APIClient(env.APIEndpoint());
  const req = new CreateI();

  const obj = new CreateI_Obj();
  const objProperty = new CreateI_Obj_Property();
  const dataObj = new CreateI_Obj_Property_Data();
  const dataObjValue = [];
  const dataObjArray = [];
  dataObjValue.push(value);
  dataObjArray.push(dataObj);

  dataObj.setSpace('y');
  dataObj.setValueList(dataObjValue);
  objProperty.setText(text);
  objProperty.setDataList(dataObjArray);
  obj.getMetadataMap().set(timelineIdKey, timelineIdValue);
  obj.getMetadataMap().set(userIdKey, userIdvalue);
  obj.setProperty(objProperty);

  req.setObj(obj);

  console.log('object to be created:', req);
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
        alert(
          `Error code: ${err.code}, Something went wrong, please email tim@venturemark.co or marcus@venturemark.co`,
        );
        reject(err);
      } else {
        const metricId = res.toObject().obj.metadataMap[0][1];
        const updateId = res.toObject().obj.metadataMap[1][1];
        const response = {
          metricId: metricId,
          updateId: updateId,
        };

        resolve(response);
      }
    });
  });

  return getCreateResponsePb;
}
