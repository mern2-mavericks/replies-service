import type { NextFunction, Request, Response } from "express";
import ReplyServices from "../services/reply.service";

const ReplyController = {
  handleGetAllReplies: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const replies = await ReplyServices.getAll();
      return res
        .status(200)
        .json({ message: "Get All Success", data: replies });
    } catch (error) {
      console.log(`Controller error : ${error}`);
      next(error);
    }
  },
  handleGetSingleReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const replyId = req.params.id;
      const reply = await ReplyServices.getOne(replyId);
      return res.status(200).json({ message: "Get One Success", data: reply });
    } catch (error) {
      console.log(`Controller error : ${error}`);
      next(error);
    }
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
      console.log(`Controller error : ${error}`);
      next(error);
    }
  },
  handleUpdateReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log(req.body);

      const { content } = req.body;
      const replyId = req.params.id;
      const updateReply = await ReplyServices.update(replyId, content);
      return res
        .status(200)
        .json({ message: "Update Reply Success", data: updateReply });
    } catch (error) {
      console.log(`Controller error : ${error}`);
      next(error);
    }
  },
  handleDeleteReply: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (error) {
      console.log(`Controller error : ${error}`);
      next(error);
    }
  },
};

export default ReplyController;
