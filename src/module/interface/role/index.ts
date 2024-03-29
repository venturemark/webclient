import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

export interface IRole {
  id: string;
  resource: string;
  role: string;
  subjectId: string;
  ventureId: string;
  timelineId?: string;
}

export interface ISearchTimelineRoles {
  timelineId?: string;
  ventureId?: string;
  token: string | null;
}

export interface ISearchVentureRoles {
  ventureId: string;
  token: string | null;
}

export interface ISearchRoleByTimelines {
  timelines: ITimeline[];
  token: string | null;
}

export interface ISearchRoleByVentures {
  ventures: IVenture[];
  token: string | null;
}

export interface INewRole {
  resource: string;
  role: string;
  subjectId: string;
  ventureId: string;
  token: string | null;
}

export interface IDeleteVentureRole {
  id: string;
  resource: string;
  ventureId: string;
  token: string | null;
}

export interface IDeleteTimelineRole {
  id: string;
  resource: string;
  timelineId: string;
  token: string | null;
}

export interface IUpdateRole {
  id: string;
  resource: string;
  role: string;
  ventureId: string;
  token: string | null;
}
