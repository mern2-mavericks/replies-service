import { NextFunction } from "express";
import { Types } from "mongoose";
import { IReply } from "../entities/interface";

const ReplyRepository = {
  getAll: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  getOne: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  create: async (newReply: IReply) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  update: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  delete: async (next: NextFunction) => {
    try {
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
};

export default ReplyRepository;
