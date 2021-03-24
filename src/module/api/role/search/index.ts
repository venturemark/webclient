import { SearchI, SearchI_Obj, SearchO } from "module/api/role/proto/search_pb";
import { APIClient } from "module/api/role/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IRole, ISearchRole } from "module/interface/role";
import * as key from "module/apikeys";

export async function Search(searchRole: ISearchRole): Promise<IRole[]> {
  const objList = [];

  const token = searchRole.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new SearchI();

  const obj = new SearchI_Obj();

  obj.getMetadataMap().set(key.ResourceKind, searchRole.resource);
  searchRole.ventureId &&
    obj.getMetadataMap().set(key.VentureID, searchRole.ventureId);
  searchRole.timelineId &&
    obj.getMetadataMap().set(key.TimelineID, searchRole.timelineId);
  objList.push(obj);
  req.setObjList(objList);

  const getSearchResponsePb: IRole[] = await new Promise((resolve, reject) => {
    client.search(req, metadata, function (err: any, res: SearchO): any {
      if (err) {
        console.log(err.code);
        console.log(err.message);
        reject(err);
        return;
      } else {
        const rolesPb = res.getObjList();

        const roles = rolesPb.map((rolePb) => {
          const metaPb = rolePb.getMetadataMap();

          const id = metaPb.get(key.RoleID);
          const resource = metaPb.get(key.ResourceKind);
          const roleKind = metaPb.get(key.RoleKind);
          const subjectId = metaPb.get(key.SubjectID);
          const ventureId = metaPb.get(key.VentureID);

          const role: IRole = {
            id,
            resource,
            role: roleKind,
            subjectId,
            ventureId,
          };
          return role;
        });
        resolve(roles);
      }
    });
  });
  return getSearchResponsePb;
}
