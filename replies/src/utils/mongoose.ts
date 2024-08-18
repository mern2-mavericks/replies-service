import mongoose from "mongoose";

export async function mongooseConnect() {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}
