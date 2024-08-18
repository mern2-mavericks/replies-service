import { model, Schema } from "mongoose";

const replySchema = new Schema({
  userId: String,
  content: String,
  parentType: String, //thread atau blog
  parentId: String,
});

export const Reply = model("Reply", replySchema);
