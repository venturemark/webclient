import { UpdateStatus } from "module/interface/api";

export interface IInvite {
  id: string;
  resource: string;
  role: string;
  code?: string;
  email?: string;
  status?: string;
  timelineId?: string;
  ventureId: string;
}

export interface ISearchInvite {
  ventureId?: string;
  token: string | null;
}

export interface ISearchAllInvite {
  subjectIds: string[];
  token: string | null;
}

export interface ICreateInvite {
  ventureId: string;
  timelineId?: string;
  email: string;
  fromName: string;
  fromVentureName: string;
  resource: string;
  role: string;
  token: string | null;
}

export interface IDeleteInvite {
  id: string;
  ventureId: string;
  token: string | null;
}

export interface IUpdateInvite {
  code: string;
  status: string;
  resource: string;
  role: string;
  id: string;
  ventureId: string;
  timelineId?: string;
  successUrl?: string;
  token: string | null;
}

export interface IUpdateStatus {
  role: string;
  status: UpdateStatus;
}
