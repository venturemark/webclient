export interface IRole {
  id: string;
  resource: string;
  role: string;
  subjectId: string;
  ventureId: string;
}

export interface ISearchTimelineRoles {
  resource: string;
  timelineId: string;
  token: string;
}

export interface ISearchVentureRoles {
  resource: string;
  ventureId: string;
  token: string;
}

export interface ISearchRoleByTimelineIds {
  resource: string;
  timelineIds: string[];
  token: string;
}

export interface ISearchRoleByVentureIds {
  resource: string;
  ventureIds: string[];
  token: string;
}

export interface INewRole {
  resource: string;
  role: string;
  subjectId: string;
  ventureId: string;
  token: string;
}

export interface IDeleteVentureRole {
  id: string;
  resource: string;
  ventureId: string;
  token: string;
}

export interface IDeleteTimelineRole {
  id: string;
  resource: string;
  timelineId: string;
  token: string;
}

export interface IUpdateRole {
  id: string;
  resource: string;
  role: string;
  ventureId: string;
  token: string;
}
