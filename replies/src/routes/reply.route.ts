import express from "express";
import ReplyController from "../controllers/reply.controller";

export const replyRouter = express.Router();

replyRouter.get("/", ReplyController.handleGetAllReplies);
replyRouter.get("/:id", ReplyController.handleGetSingleReply);
replyRouter.post("/", ReplyController.handleCreateReply);
replyRouter.patch("/:id", ReplyController.handleUpdateReply);
replyRouter.delete("/:id", ReplyController.handleDeleteReply);
