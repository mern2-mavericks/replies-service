import { NextFunction } from "express";
import { IReply } from "../entities/interface";
import ReplyRepository from "../repositories/reply.repository";

const ReplyServices = {
  getAll: async () => {
    try {
      const allReplies = await ReplyRepository.getAll();
      if (!allReplies) {
        throw { name: "NotFound" };
      }
      return allReplies;
    } catch (error) {
      console.log("Service Error:", error);
      throw error;
    }
  },
  getOne: async (id: string) => {
    try {
      const singleTodo = await ReplyRepository.getOne(id);
      if (!singleTodo) {
        throw { name: "NotFound" };
      }
      return singleTodo;
    } catch (error) {
      console.log("Service Error:", error);
      throw error;
    }
  },
  create: async (newReply: IReply) => {
    try {
      const { userId, content, parentType, parentId } = newReply;
      if (!userId || !content || !parentType || !parentId) {
        throw { name: "Incomplete" };
      }
      return await ReplyRepository.create(newReply);
    } catch (error) {
      console.log("Service Error:", error);
      throw error;
    }
  },
  update: async () => {
    try {
    } catch (error) {
      console.log("Service Error:", error);
      throw error;
    }
  },
  delete: async () => {
    try {
    } catch (error) {
      console.log("Service Error:", error);
      throw error;
    }
  },
};

export default ReplyServices;
