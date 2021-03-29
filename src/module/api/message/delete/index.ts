import {
  DeleteI,
  DeleteI_Obj,
  DeleteO,
} from "module/api/message/proto/delete_pb";
import { APIClient } from "module/api/message/proto/ApiServiceClientPb";
import * as env from "module/env";
import { IMessage, IDeleteMessage } from "module/interface/message/index";
import * as key from "module/apikeys";

export async function Delete(
  IDeleteMessage: IDeleteMessage
): Promise<IMessage[]> {
  const objList = [];

  const token = IDeleteMessage.token;
  const metadata = { Authorization: `Bearer ${token}` };

  //instantiate client and req classes
  const client = new APIClient(env.APIEndpoint());
  const req = new DeleteI();

  const obj = new DeleteI_Obj();
  obj.getMetadataMap().set(key.MessageID, IDeleteMessage.id);
  objList.push(obj);
  req.setObjList(objList);

  const getDeleteResponsePb: IMessage[] = await new Promise(
    (resolve, reject) => {
      client.delete(req, metadata, function (err: any, res: DeleteO): any {
        if (err) {
          console.log(err.code);
          console.log(err.message);
          reject(err);
          return;
        } else {
          const messagesPb = res.getObjList();

          const status = messagesPb.map((messagePb) => {
            const metaPb = messagePb.getMetadataMap();
            const id = metaPb.get(key.MessageStatus);
            return id;
          });
          resolve(status);
        }
      });
    }
  );
  return getDeleteResponsePb;
}
