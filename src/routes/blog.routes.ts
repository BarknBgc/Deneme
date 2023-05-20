import express from "express";
import {
  createBlog,
  getBlogById,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlogs);
blogRoutes.get("/:id", getBlogById);
blogRoutes.post("/", authMiddleware, createBlog);
blogRoutes.put("/:id", authMiddleware, updateBlog);
blogRoutes.delete("/:id", authMiddleware, deleteBlog);
