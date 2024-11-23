interface User {
  id: number;
  imgUser: string;
  name: string;
}

export interface postCardInterface {
  id?: number;
  user: User;
  festivalId?: number;
  type?: string;
  title?: string;
  details?: string;
  dateCreate: string;
}