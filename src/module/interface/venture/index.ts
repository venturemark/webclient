import { UserRole } from "../user";

export interface IVenture {
  id: string;
  name: string;
  desc: string;
  url?: string;
  userRole?: UserRole;
}

export interface ISearchVenturesByUser {
  userId: string;
  token: string | null;
}

export interface ISearchVenturesByTimeline {
  ventureIds: string[];
  token: string | null;
}

export interface IDeleteVenture {
  id: string;
  token: string | null;
  successUrl: string;
}

export interface ICreateVenture {
  name: string;
  desc: string;
  url: string;
  successUrl?: string;
  token: string | null;
}

export interface IUpdateVenture {
  id: string;
  name: string;
  desc: string;
  url: string;
  successUrl?: string;
  token: string | null;
}
