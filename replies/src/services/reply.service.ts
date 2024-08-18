import { NextFunction } from "express";
import { IReply } from "../entities/interface";
import ReplyRepository from "../repositories/reply.repository";

const ReplyServices = {
  getAll: async () => {
    try {
    } catch (error) {}
  },
  getOne: async () => {
    try {
    } catch (error) {}
  },
  create: async (newReply: IReply) => {
    try {
      const { userId, content, parentType, parentId } = newReply;
      if (!userId || !content || !parentType || !parentId) {
        throw { name: "Incomplete" };
      }
      return await ReplyRepository.create(newReply);
    } catch (error) {
      console.log(error);
    }
  },
  update: async () => {
    try {
    } catch (error) {}
  },
  delete: async () => {
    try {
    } catch (error) {}
  },
};

export default ReplyServices;
