export interface CustomError extends Error {
  name: string;
  errors?: { message: string }[];
}

export interface IReply {
  userId: string;
  content: string;
  parentType: string; //thread atau blog
  parentId: string;
}
