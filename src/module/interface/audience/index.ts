type User = string;

export interface IAudience {
  name: string;
  members: User[];
  userId: string;
  organizationId: string;
}
