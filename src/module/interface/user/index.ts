export type UserRole = "owner" | "member";

export interface Job {
  title?: string;
  venture?: string;
}

export interface IUser {
  id: string;
  mail: string;
  name: string;
  title?: string;
  job?: Job;
}

export interface ISearchCurrentUser {
  token: string | null;
}

export interface ISearchVentureMembers {
  resource: string;
  ventureId: string;
  token: string | null;
}

export interface ISearchTimelineMembers {
  resource: string;
  timelineId: string;
  ventureId: string;
  token: string | null;
}

export interface ISearchAllUser {
  subjectIds: string[];
  token: string | null;
}

export interface ICreateUser {
  mail: string;
  name: string;
  title: string;
  ventureName?: string;
  ventureTitle?: string;
  successUrl?: string;
  token: string | null;
}

export interface IDeleteUser {
  id: string;
  token: string | null;
}

export interface IUpdateUser {
  mail: string;
  id: string;
  name: string;
  title: string;
  successUrl?: string;
  token: string | null;
}
