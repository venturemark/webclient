export interface IVenture {
  id: string;
  name: string;
  desc: string;
  url?: string;
}

export interface ISearchVenture {
  id?: string;
  userId?: string;
  token: string;
}

export interface IDeleteVenture {
  id: string;
  token: string;
}

export interface ICreateVenture {
  name: string;
  desc: string;
  url: string;
  successUrl?: string;
  token: string;
}

export interface IUpdateVenture {
  id: string;
  name: string;
  desc: string;
  url: string;
  successUrl?: string;
  token: string;
}
