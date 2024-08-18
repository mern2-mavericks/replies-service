import { NextFunction } from "express";
import { Types } from "mongoose";
import { IReply } from "../entities/interface";
import { Reply } from "../models/reply.schema";

const ReplyRepository = {
  getAll: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
  getOne: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
  create: async (reply: IReply) => {
    try {
      const newReply = new Reply(reply);
      return await newReply.save();
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
  update: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
  delete: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
};

export default ReplyRepository;
