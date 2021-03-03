type User = string;

export interface IAudience {
  name: string;
  members: User[];
  userId: string;
  organizationId: string;
  ventureId: string;
}

export interface INewAudience {
  name: string;
  members: User[];
  userId: string;
  organizationId: string;
  ventureId: string;
  token: string;
}
