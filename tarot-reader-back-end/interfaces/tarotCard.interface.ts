import { Document } from "mongoose";

export interface ITarotCard extends Document {
  name: string;
  description: string;
  imageUrl: string;
  suit: string; // e.g., "Cups", "Swords", "Wands", "Pentacles"
  number: number; // e.g., 1-10 for numbered cards, or 11-22 for Major Arcana
  reversedMeaning?: string; // Optional meaning when the card is reversed
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITarotCardRequest {
  name: string;
  description: string;
  imageUrl: string;
  suit: string; // e.g., "Cups", "Swords", "Wands", "Pentacles"
  number: number; // e.g., 1-10 for numbered cards, or 11-22 for Major Arcana
  reversedMeaning?: string; // Optional meaning when the card is reversed
}
export interface ITarotCardResponse {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  suit: string; // e.g., "Cups", "Swords", "Wands", "Pentacles"
  number: number; // e.g., 1-10 for numbered cards, or 11-22 for Major Arcana
  reversedMeaning?: string; // Optional meaning when the card is reversed
  createdAt: Date;
  updatedAt: Date;
}
