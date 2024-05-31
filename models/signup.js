const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
  },
  dateRegistered: { type: Date, default: Date.now },
});

const users = mongoose.model("user", SignupSchema);
module.exports = users;
