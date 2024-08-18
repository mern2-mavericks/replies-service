import type { NextFunction, Request, Response } from "express";
import ReplyServices from "../services/reply.service";

const ReplyController = {
  handleGetAllReplies: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (error) {}
  },
  handleGetSingleReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (error) {}
  },
  handleCreateReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userId, content, parentType, parentId } = req.body;
      const newReply = await ReplyServices.create(req.body);
      return res
        .status(200)
        .json({ message: "Create reply Success", data: newReply });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  handleUpdateReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (error) {}
  },
  handleDeleteReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (error) {}
  },
};

export default ReplyController;
