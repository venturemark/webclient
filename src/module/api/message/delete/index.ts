import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/message/proto/delete_pb";
import * as key from "module/apikeys";
import * as env from "module/env";
import { DeletionStatus } from "module/interface/api";
import { IDeleteMessage } from "module/interface/message";

export async function Delete(
  IDeleteMessage: IDeleteMessage
): Promise<DeletionStatus[]> {
  const objList = [];

  const token = IDeleteMessage.token;
  const metadata = { Authorization: `Bearer ${token || key.DefaultToken}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();
  const obj = new DeleteI_Obj();

  obj.getMetadataMap().set(key.MessageID, IDeleteMessage.id);
  obj.getMetadataMap().set(key.UpdateID, IDeleteMessage.updateId);
  obj.getMetadataMap().set(key.TimelineID, IDeleteMessage.timelineId);
  obj.getMetadataMap().set(key.VentureID, IDeleteMessage.ventureId);
  objList.push(obj);
  req.setObjList(objList);

  return new Promise((resolve, reject) => {
    client.delete(req, metadata, function (err: any, res: DeleteO): any {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(
          res.getObjList().map((updatePb) => {
            const metaPb = updatePb.getMetadataMap();
            return metaPb.get(key.MessageStatus) as DeletionStatus;
          })
        );
      }
    });
  });
}
