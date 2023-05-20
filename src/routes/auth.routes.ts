import express from "express";
import { login, register } from "../controllers/auth.controller";

export const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
