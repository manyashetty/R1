import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
// import {isValid , isValidBody} from "../models/validator.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Validate username and password
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect" });
  }
  return res.status(200).json({ message: "Login successful!" });
  // const token = jwt.sign({ id: user._id }, "secret");
  // res.json({ token, userID: user._id });

}catch(error) {
  console.error("Error during login:", error);
  return res.status(500).json({ message: "Error during login." });
};
});
export { router as userRouter };

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
