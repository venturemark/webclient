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
  lastUpdate?: Record<string, string>;
}

export interface ISearchCurrentUser {
  token: string | null;
}

export interface ISearchVentureMembers {
  ventureId?: string;
  token: string | null;
}

export interface ISearchTimelineMembers {
  timelineId?: string;
  ventureId?: string;
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
  id: string;
  name?: string;
  title?: string;
  mail?: string;
  lastUpdate?: Record<string, string>;

  successUrl?: string;
  token: string | null;
}
