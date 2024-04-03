import bcrypt from "bcryptjs";
import { BadRequestError } from "../errors/index.js";

const hashPassword = async (req, res, next) => {
  const password = req.body.password;

  if (!password) {
    throw new BadRequestError("Please provide password");
  }

  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(password, salt);
  next();
};

export default hashPassword;
