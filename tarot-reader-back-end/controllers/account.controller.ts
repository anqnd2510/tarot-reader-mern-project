import { Request, Response, NextFunction } from "express";
import { AccountService } from "../services/account.service";
const service = new AccountService();

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, fullname, dob } = req.body;
    const response = await service.register(email, password, fullname, dob);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const response = await service.login(email, password);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};
