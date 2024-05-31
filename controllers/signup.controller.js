const signup = require("../models/signup");
const brcypt = require("bcrypt");

const userSingup = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  //check is user already exist
  const checkUser = await signup.findOne({
    $or: [{ name: data.name }, { email: data.email }],
  });
  if (checkUser) {
    if (checkUser.name === data.name) {
      return res.status(409).json({ message: "Username already exists" });
    } else {
      return res.status(409).json({ message: "Email already exists" });
    }
  } else {
    //hash password

    const hashedPassword = await brcypt.hash(data.password, 10);
    data.password = hashedPassword;
    // Create new User
    let createUser = await signup.create(data);

    // Return json response of created user
    return res.status(201).json(createUser);
  }

  //
};

const userLogin = async (req, res) => {

  try {
    const user = await signup.findOne({ name: req.body.name });

    // Check if user exists
    if (user === null) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await brcypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordMatch) {
      return res.status(200).json({ message: "logged in successfully" });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { userLogin, userSingup };
