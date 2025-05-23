import { Request, Response, NextFunction } from "express";
import { TarotReadingService } from "../services/tarotReading.service";

// Extend Express Request interface to include 'account'
declare global {
  namespace Express {
    interface Request {
      account?: { id: string };
    }
  }
}

const service = new TarotReadingService();

export const drawTarotCards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cardIds, question } = req.body;
    const accountId = req.account?.id || "6631a1b6e4a844b0fbb6f9b1"; // fake if auth chưa có

    const response = await service.drawCards(cardIds, question, accountId);
    res.status(response.statusCode).json(response);
  } catch (error) {
    next(error);
  }
};
