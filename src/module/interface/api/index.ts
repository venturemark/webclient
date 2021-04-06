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
