import { Request, Response } from "express";
import { Blog, BlogModel } from "../models/blog.model";
import { AuthenticatedRequest } from "../types/express";

export const createBlog = async (req: AuthenticatedRequest, res: Response) => {
  const { title, content } = req.body;

  try {
    const blog: Blog = new BlogModel({
      title,
      content,
      createdBy: req.userId,
    });

    await blog.save();

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const blog = await BlogModel.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find();

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blog = await BlogModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const blog = await BlogModel.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
