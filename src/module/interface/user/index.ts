export type UserRole = boolean | "isOwner" | undefined;

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

export interface ISearchCurrentUser {
  token: string;
}

export interface ISearchVentureMembers {
  resource: string;
  ventureId: string;
  token: string;
}

export interface ISearchTimelineMembers {
  resource: string;
  timelineId: string;
  ventureId: string;
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
