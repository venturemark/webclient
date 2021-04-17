export interface IAPISearchUser {
  id?: string;
  resource?: string;
  timelineId?: string;
  ventureId?: string;
  token: string;
}

export interface IAPISearchTimeline {
  ventureId?: string;
  userId?: string;
  token: string;
}

export interface IAPISearchVenture {
  id?: string;
  userId?: string;
  token: string;
}

export interface IAPISearchRole {
  resource: string;
  ventureId?: string;
  timelineId?: string;
  token: string;
}

export interface IAPIDeleteRole {
  id: string;
  resource: string;
  ventureId?: string;
  timelineId?: string;
  token: string;
}
