import type { Request, Response } from "express";
import ReplyServices from "../services/reply.service";

const ReplyController = {
  handleGetAllReplies: async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  },
  handleGetSingleReply: async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  },
  handleCreateReply: async (req: Request, res: Response) => {
    try {
      const { userId, content, parentType, parentId } = req.body;
      const newReply = await ReplyServices.create(req.body);
    } catch (error) {}
  },
  handleUpdateReply: async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  },
  handleDeleteReply: async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  },
};

export default ReplyController;
