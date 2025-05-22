import { Document, Types } from "mongoose";

export interface IReadingCard {
  cardId: Types.ObjectId;
  isReversed: boolean;
  meaning: string;
}

export interface ITarotReading extends Document {
  userId: Types.ObjectId;
  question?: string;
  spread: IReadingCard[];
}
