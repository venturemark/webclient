export async function Search(
  timelineIdKey: string,
  timelineIdvalue: string,
  userIdKey: string,
  userIdvalue: string,
) {}

/*
import * as apigents from "@venturemark/apigents";
import { SearchI_Obj, SearchO_Obj } from "module/api/metric/proto/search_pb";
import * as env from "module/env";

export async function Search(
  timelineIdKey: string,
  timelineIdvalue: string,
  userIdKey: string,
  userIdvalue: string
) {
  const objList = [];
  //instantiate client and req classes
  const client = new apigents.Metric.Client(env.APIEndpoint());
  const req = new apigents.Metric.Search.I();

  // Need to map JSON array of objects into protobuf using the generated marshalling code.
  const obj = new SearchI_Obj();
  obj.getMetadataMap().set(timelineIdKey, timelineIdvalue);
  obj.getMetadataMap().set(userIdKey, userIdvalue);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, {}, function (err: any, res: any): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        alert(
          `Error code: ${err.code}, Something went wrong, please email tim@venturemark.co or marcus@venturemark.co`
        );
        reject(err);
      } else {
        const metricsPb = res.getObjList();

        const metrics = metricsPb.map((metricPb: SearchO_Obj) => {
          const metricPbObj = metricPb.toObject();

          const metricId = metricPbObj.metadataMap[0][1];
          const timelineId = metricPbObj.metadataMap[1][1];
          const userId = metricPbObj.metadataMap[2][1];
          const value = metricPbObj.property.dataList[1].valueList[0];

          const metric: any = {
            updateId: metricId,
            userId: userId,
            timelineId: timelineId,
            value: value,
          };
          return metric;
        });
        resolve(metrics);
      }
    });
  });
  return getSearchResponsePb;
}
*/
