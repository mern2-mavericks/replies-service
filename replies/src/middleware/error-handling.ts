import { Request, Response, NextFunction } from "express";
import { CustomError } from "../entities/interface";

const errorHandler = async (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("Error Handler:", error);

  let statusCode: number = 0;
  let message: string = "";

  switch (error.name) {
    case "NotAuthorized":
      statusCode = 403;
      message = "You are not authorized";
      break;
    case "NotFound":
      statusCode = 404;
      message = "Data not found";
      break;
    case "Incomplete":
      statusCode = 400;
      message = "Data not complete!";
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
