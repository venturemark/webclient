export interface IAPISearchUser {
  id?: string;
  resource?: string;
  timelineId?: string;
  ventureId?: string;
  token: string | null;
}

export interface IAPISearchTimeline {
  ventureId?: string;
  userId?: string;
  token: string | null;
}

export interface IAPISearchVenture {
  id?: string;
  userId?: string;
  token: string | null;
}

export interface IAPISearchRole {
  resource: string;
  ventureId?: string;
  timelineId?: string;
  token: string | null;
}

export interface IAPIDeleteRole {
  id: string;
  resource: string;
  ventureId?: string;
  timelineId?: string;
  token: string | null;
}

export type CreationStatus = "created" | undefined;
export type UpdateStatus = "updated" | undefined;
export type DeletionStatus = "deleted" | undefined;
