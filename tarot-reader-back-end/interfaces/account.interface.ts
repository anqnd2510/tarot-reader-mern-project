import { Document } from "mongoose";
export interface IAccount extends Document {
  email: string;
  password: string;
  fullname?: string;
  dob: Date;
  role?: "user" | "admin";
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IAccountRequest {
  email: string;
  password: string;
  fullname?: string;
  dob: Date;
}
