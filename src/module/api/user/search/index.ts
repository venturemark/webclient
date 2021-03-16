import {
  SearchI,
  SearchI_Obj,
  SearchO_Obj,
} from "module/api/user/proto/search_pb";
import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IUser, ISearchUser, Job } from "module/interface/user/index";
import * as key from "module/apikeys";

export async function Search(searchUser: ISearchUser): Promise<IUser[]> {
  const objList = [];

  const token = searchUser.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  obj.getMetadataMap().set(key.UserID, searchUser.id);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb: IUser[] = await new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: any): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
        return;
      } else {
        const usersPb = res.getObjList();

        const users = usersPb.map((userPb: SearchO_Obj) => {
          const propertiesPb = userPb.getProperty();
          const metaPb = userPb.getMetadataMap();

          const id = metaPb.get(key.UserID);
          const name = propertiesPb?.getName() as string;
          const title = propertiesPb?.getDesc() as string;
          const profPb = propertiesPb?.getProfList()[0];
          const job: Job = {};
          job.title = profPb?.getDesc();
          job.venture = profPb?.getVent();

          const user: IUser = {
            name: name,
            title: title,
            id: id,
            job: job,
          };
          return user;
        });
        resolve(users[0]);
      }
    });
  });
  return getSearchResponsePb;
}
