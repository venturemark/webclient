export interface IVenture {
  id: string;
  name: string;
  description: string;
  url: string;
  membersWrite: boolean;
  token: string;
  adminId: string;
  // adminAudienceId: string[];
  // memberAudienceId: string[];
}

export interface IVentureQuery {
  id: string;
  name: string;
  description: string;
  url: string;
  membersWrite: boolean;
  token: string;
  adminId: string;
  // adminAudienceId: string[];
  // memberAudienceId: string[];
}

export interface INewVenture {
  id: string;
  name: string;
  description: string;
  url: string;
  membersWrite: boolean;
  token: string;
  adminId: string;
  // adminAudienceId: string[];
  // memberAudienceId: string[];
}

export interface IUpdateVenture {
  id: string;
  name: string;
  description: string;
  url: string;
  membersWrite: boolean;
  token: string;
  adminId: string;
  // adminAudienceId: string[];
  // memberAudienceId: string[];
}
