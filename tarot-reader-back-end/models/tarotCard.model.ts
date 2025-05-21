import mongoose, { Schema } from "mongoose";
import { ITarotCard } from "../interfaces/tarotCard.interface";

const tarotCardSchema = new Schema<ITarotCard>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    suit: { type: String, required: true },
    number: { type: Number, required: true },
    reversedMeaning: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITarotCard>("tarotCard", tarotCardSchema);
