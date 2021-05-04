export interface IInvite {
  id: string;
  resource: string;
  role: string;
  code?: string;
  email?: string;
  status?: string;
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
  resource: string;
  role: string;
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
  resource: string;
  role: string;
  id: string;
  ventureId: string;
  successUrl?: string;
  token: string;
}

export interface IUpdateStatus {
  role: string;
  status: string;
}
