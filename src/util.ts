import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
      .connect(
        "mongodb+srv://arbaz123:arbaz123@cluster0.gmfic5t.mongodb.net/WearThings?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("connected to db");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  