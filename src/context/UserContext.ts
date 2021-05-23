import { createContext } from "react";
import { QueryStatus } from "react-query";

import { IUser } from "module/interface/user";

export interface IUserContext {
  user?: IUser;
  status?: QueryStatus;
}

export const UserContext = createContext<IUserContext>({});
