import { NextFunction } from "express";
import { Types } from "mongoose";
import { IReply } from "../entities/interface";
import { Reply } from "../models/reply.schema";

const ReplyRepository = {
  getAll: async () => {
    try {
      return await Reply.find();
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
  getOne: async (id: string) => {
    try {
      return await Reply.findById(id);
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
  update: async () => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
  delete: async () => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
      throw error;
    }
  },
};

export default ReplyRepository;
