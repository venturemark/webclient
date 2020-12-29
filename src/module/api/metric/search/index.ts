import apigents from "@venturemark/apigents";
import { SearchI_Obj, SearchO_Obj } from "module/api/metric/proto/search_pb";
import * as env from "module/env";
import { IMetric } from "module/interface/metric/index";

export async function Search(
  timelineIdKey: string,
  timelineIdvalue: string,
  metricIdKey: string,
  metricIdValue: string,
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
  obj.getMetadataMap().set(metricIdKey, metricIdValue);
  obj.getMetadataMap().set(userIdKey, userIdvalue);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb = await new Promise((resolve, reject) => {
    client.search(req, {}, function (err: any, res: any): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
      } else {
        const metricsPb = res.getObjList();

        const metrics = metricsPb.map((metricPb: SearchO_Obj) => {
          const dataPb = metricPb.getProperty();
          console.log(dataPb);
          const metricId = metricPb.getMetadataMap().toObject()[0][1] as string;
          const timelineId = metricPb
            .getMetadataMap()
            .toObject()[1][1] as string;
          const userId = updatePb.getMetadataMap().toObject()[2][1] as string;

          const metric: IMetric = {
            name: name as string,
            metricId: metricId,
            userId: userId,
            timelineId: timelineId,
            dataKey: name as string,
            isCurrent: false,
            updates: [],
            data: [],
          };
          return metric;
        });
        resolve(metrics);
      }
    });
  });
  return getSearchResponsePb;
}
