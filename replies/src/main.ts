import express from "express";
import dotenv from "dotenv";
import { mongooseConnect } from "./utils/mongoose";
import errorHandler from "./middleware/error-handling";
import { replyRouter } from "./routes/reply.route";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongooseConnect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/replies", replyRouter);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
