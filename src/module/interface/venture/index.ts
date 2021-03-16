export interface IVenture {
  id: string;
  name: string;
  desc: string;
  url?: string;
}

export interface IVentureSearch {
  id: string;
  token: string;
}

export interface IVenturesSearch {
  id: string;
  token: string;
}

export interface IVentureDelete {
  id: string;
  token: string;
}

export interface INewVenture {
  name: string;
  desc: string;
  url: string;
  token: string;
}

export interface IUpdateVenture {
  id: string;
  name: string;
  desc: string;
  url: string;
  membersWrite: boolean;
  token: string;
  adminId: string;
}
