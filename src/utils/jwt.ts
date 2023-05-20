import jwt, { Secret } from "jsonwebtoken";

export const generateToken = (userId: string) =>
  jwt.sign({ userId }, process.env.JWT_SECRET as Secret);
