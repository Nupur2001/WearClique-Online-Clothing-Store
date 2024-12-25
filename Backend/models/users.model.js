import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"], 
    },
    clothes: {
      type: [String], 
      required: false,
    },
    bio: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, 
      unique: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      match: /^[^@]+@[^@]+\.[^@]+$/, 
    },
    password: {
      type: String,
      required: true,
      minlength: 6, 
    },
  },
);

const User = mongoose.model("User", userSchema);
export default User;
