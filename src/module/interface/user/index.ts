export interface Job {
  title?: string;
  venture?: string;
}

export interface IUser {
  id: string;
  name: string;
  title?: string;
  job?: Job;
}

export interface ISearchUser {
  id?: string;
  // resource?: string;
  // timelineId?: string;
  token: string;
}

export interface ISearchAllUser {
  subjectIds: string[];
  token: string;
}

export interface ICreateUser {
  name: string;
  title: string;
  ventureName?: string;
  ventureTitle?: string;
  successUrl?: string;
  token: string;
}

export interface IDeleteUser {
  id: string;
  token: string;
}

export interface IUpdateUser {
  id: string;
  name: string;
  title: string;
  successUrl?: string;
  token: string;
}
