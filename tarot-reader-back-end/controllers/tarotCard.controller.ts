import { Request, Response, NextFunction } from "express";
import { TarotCardService } from "../services/tarotCard.service";
const service = new TarotCardService();

export const createTarotCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tarotCardData = req.body;
    const response = await service.createTarotCard(tarotCardData);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

export const getTarotCardById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const response = await service.getTarotCardById(id);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

export const getAllTarotCards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await service.getAllTarotCards();
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

export const updateTarotCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const tarotCardData = req.body;
    const response = await service.updateTarotCard(id, tarotCardData);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

export const deleteTarotCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const response = await service.deleteTarotCard(id);
    res.status(response.statusCode).json(response);
  } catch (err) {
    next(err);
  }
};
