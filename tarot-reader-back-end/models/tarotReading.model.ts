import mongoose, { Schema } from "mongoose";
import { ITarotReading } from "../interfaces/tarotReading.interface";

const tarotReadingSchema = new Schema<ITarotReading>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    question: { type: String, required: false },
    spread: [
      {
        cardId: {
          type: Schema.Types.ObjectId,
          ref: "tarotCard",
          required: true,
        },
        isActive: { type: Boolean, default: false },
        meaning: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ITarotReading>(
  "tarotReading",
  tarotReadingSchema
);
