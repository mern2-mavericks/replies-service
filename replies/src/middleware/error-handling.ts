import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  name: string;
  errors?: { message: string }[];
}

const errorHandler = async (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(error);

  let statusCode: number = 0;
  let message: string = "";

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      message = error.errors ? error.errors[0].message : "Validation error";
      break;
    case "EmailRequired":
      statusCode = 400;
      message = "Email is required";
      break;
    case "PasswordRequired":
      statusCode = 400;
      message = "Password is required";
      break;
    case "InvalidLogin":
      statusCode = 401;
      message = "Invalid email/password";
      break;
    case "InvalidToken":
      statusCode = 401;
      message = "Invalid token";
      break;
    case "Forbidden":
    case "JsonWebTokenError":
    case "NotAuthorized":
      statusCode = 403;
      message = "You are not authorized";
      break;
    case "NotFound":
      statusCode = 404;
      message = "Data not found";
      break;
    default:
      statusCode = 500;
      message = "Internal Server Error";
      break;
  }

  res.status(statusCode).json({
    statusCode,
    message,
  });
};

export default errorHandler;
