export interface IPost {
  id: string;
  userId?: string;
  title: string;
  body: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}
