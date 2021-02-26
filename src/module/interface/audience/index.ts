type User = string;

export interface IAudience {
  name: string;
  members: User[];
  userId: string;
  organizationId: string;
}

export interface INewAudience {
  name: string;
  members: User[];
  userId: string;
  organizationId: string;
  token: string;
}
