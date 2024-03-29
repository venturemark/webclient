import { UserRole } from "module/interface/user";

export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  userId?: string;
  icon?: string;
  membersWrite?: boolean;
  lastUpdate?: string;
  id: string;
  date?: string;
  userRole?: UserRole;
  visibility?: string;
}

export interface ISearchTimelinesbyUserId {
  userId?: string;
  token: string | null;
}

export interface ISearchTimelinesByVentureId {
  userId?: string;
  ventureId?: string;
  token: string | null;
}

export interface ICreateTimeline {
  name: string;
  desc: string;
  ventureId: string;
  membersWrite: boolean;
  visibility?: string;
  redirectOnSuccess: boolean;
  token: string | null;
  icon?: string;
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
  visibility?: string;
  successUrl?: string;
  token: string | null;
  icon?: string;
  previous?: ITimeline;
}
