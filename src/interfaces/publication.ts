export interface UserInterface {
  id: string | number;
  name: string;
  imgUser: string | null;
}

export interface publicationInterface {
  id?: number;
  userId?: string;
  festivalId?: string;
  type?: string;
  title?: string;
  details?: string;
  maxParticipants?: number;
  participants?: (string | null)[]
  creationDate?: string;
  creationTime?: string;
  imageUrl?: null;
  user?: UserInterface;
}