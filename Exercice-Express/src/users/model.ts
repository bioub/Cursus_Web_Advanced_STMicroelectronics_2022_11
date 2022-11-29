import { model, Schema } from "mongoose";

export const tokens: string[] = [];

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model('User', schema);

export default User;
