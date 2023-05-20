import { Document, Schema, Types, model } from "mongoose";

export interface Blog extends Document {
  title: string;
  content: string;
  createdBy: Types.ObjectId;
}

const blogSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const BlogModel = model<Blog>("Blog", blogSchema);
