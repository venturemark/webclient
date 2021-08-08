import { UserRole } from "module/interface/user";

export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  userId?: string;
  membersWrite: boolean;
  lastUpdate?: string;
  id: string;
  date?: string;
  userRole?: UserRole;
}

export interface ISearchTimelinesbyUserId {
  userId?: string;
  token: string | null;
}

export interface ICreateTimeline {
  name: string;
  desc: string;
  ventureId: string;
  membersWrite: boolean;
  successUrl?: string;
  token: string | null;
}

export interface IDeleteTimeline {
  id: string;
  ventureId: string;
  token: string | null;
}

export interface IUpdateTimeline {
  id: string;
  ventureId: string;
  desc?: string;
  name?: string;
  stat?: string;
  membersWrite?: boolean;
  successUrl?: string;
  token: string | null;
}
