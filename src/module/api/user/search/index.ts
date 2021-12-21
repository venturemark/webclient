import { APIClient } from "module/api/user/proto/ApiServiceClientPb";
import { SearchI, SearchI_Obj, SearchO } from "module/api/user/proto/search_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { IAPISearchUser } from "module/interface/api";
import { IUser, Job } from "module/interface/user";

export async function Search(searchUser: IAPISearchUser): Promise<IUser[]> {
  const objList = [];

  const token = searchUser.token;
  const metadata = { Authorization: token ? `Bearer ${token}` : "" };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  searchUser.id && obj.getMetadataMap().set(key.UserID, searchUser.id);
  searchUser.resource &&
    obj.getMetadataMap().set(key.ResourceKind, searchUser.resource);
  searchUser.timelineId &&
    obj.getMetadataMap().set(key.TimelineID, searchUser.timelineId);
  searchUser.ventureId &&
    obj.getMetadataMap().set(key.VentureID, searchUser.ventureId);

  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: SearchO): any {
      if (err) {
        reject(err);
        return;
      } else {
        const usersPb = res.getObjList();

        const users = usersPb.map((userPb) => {
          const propertiesPb = userPb.getProperty();
          const metaPb = userPb.getMetadataMap();

          const id = metaPb.get(key.UserID)!;
          const name = propertiesPb?.getName()!;
          const mail = propertiesPb?.getMail()!;
          const title = propertiesPb?.getDesc()!;

          const profPb = propertiesPb?.getProfList()[0];
          const job: Job = {};
          job.title = profPb?.getDesc();
          job.venture = profPb?.getVent();

          const user: IUser = {
            mail,
            name,
            title,
            id,
            job,
          };

          const lastUpdateString = metaPb.get(key.TimelineLastUpdate);
          if (lastUpdateString) {
            const lastUpdate: Record<string, string> = {};
            for (const [key, value] of Object.entries(
              JSON.parse(lastUpdateString)
            )) {
              if (typeof value !== "string") continue;
              lastUpdate[key] = value;
            }
            user.lastUpdate = lastUpdate;
          }

          return user;
        });
        resolve(users);
      }
    });
  });
}
