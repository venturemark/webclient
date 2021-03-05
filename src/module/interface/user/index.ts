export interface IUser {
  id: string;
  name: string;
  title?: string;
  userType?: "isAdmin" | "isRequested";
  token?: string;
  // audienceIds: string[];
}

export interface IUserQuery {
  id: string;
  name: string;
  title: string;
  token: string;
  // audienceIds: string[];
}

export interface INewUser {
  id: string;
  name: string;
  title: string;
  token: string;
  // audienceIds: string[];
}

export interface IUpdateUser {
  id: string;
  name: string;
  title: string;
  token: string;
  // audienceIds: string[];
}
