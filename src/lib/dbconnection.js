import mongoose from "mongoose";

function dbConnection() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
    console.log("db connected");
  } catch (error) {
    console.log( "error",error);
  }
}

export default dbConnection;