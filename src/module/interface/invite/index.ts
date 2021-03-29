export interface IInvite {
  id: string;
  code?: string;
  email?: string;
  ventureId: string;
}

export interface ISearchInvite {
  ventureId: string;
  token: string;
}

export interface ISearchAllInvite {
  subjectIds: string[];
  token: string;
}

export interface ICreateInvite {
  ventureId: string;
  email: string;
  fromName: string;
  fromVentureName: string;
  token: string;
}

export interface IDeleteInvite {
  id: string;
  ventureId: string;
  token: string;
}

export interface IUpdateInvite {
  code: string;
  status: string;
  id: string;
  ventureId: string;
  token: string;
}

export interface IUpdateStatus {
  role: string;
  status: string;
}
