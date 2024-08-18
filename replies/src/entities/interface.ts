export interface CustomError extends Error {
  name: string;
  errors?: { message: string }[];
}
