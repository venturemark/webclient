import { UserRole } from "../user";

export interface ITimeline {
  name: string;
  desc: string;
  stat: string;
  ventureId: string;
  userId?: string;
  id: string;
  date?: string;
  userRole?: UserRole;
}

export interface ISearchTimelinesbyUserId {
  userId: string;
  token: string | null;
}

export interface ISearchTimelinesbyVentureId {
  ventureId: string;
  token: string | null;
}

export interface ICreateTimeline {
  name: string;
  desc: string;
  ventureId: string;
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
  successUrl?: string;
  token: string | null;
}
