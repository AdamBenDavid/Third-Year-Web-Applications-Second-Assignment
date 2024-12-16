import mongoose from "mongoose";

export interface User {
  email: string;
  userName: string;
  password: string;
  // _id?: string;
}

const userSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName:{
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

});

const userModel = mongoose.model<User>("Users", userSchema);

export default userModel;