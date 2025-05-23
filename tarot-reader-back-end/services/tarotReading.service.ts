import { TarotCardRepository } from "../repositories/tarotCard.repository";
import { TarotReadingRepository } from "../repositories/tarotReading.repository";
import { ApiResponse } from "../utils/apiResponse";
import { HTTP_STATUS } from "../constants/httpStatus";
import { Types } from "mongoose";

export class TarotReadingService {
  constructor(
    private tarotReadingRepo = new TarotReadingRepository(),
    private tarotCardRepo = new TarotCardRepository()
  ) {}

  async drawCards(
    cardIds: string[],
    question: string | undefined,
    accountId: string
  ) {
    try {
      const cards = await this.tarotCardRepo.findAllTarotCards();

      const selectedCards = cards.filter((card) =>
        cardIds.includes(card.id.toString())
      );

      const spread = selectedCards.map((card) => {
        const isReversed = Math.random() < 0.5;
        const meaning = isReversed
          ? card.reversedMeaning || "No reversed meaning"
          : card.uprightMeaning || "No upright meaning";

        return {
          cardId: card._id,
          isReversed,
          meaning,
        };
      });
      const saved = {
        accountId: new Types.ObjectId(accountId),
        question,
        spread,
      };
      return ApiResponse.success(
        saved,
        "Tarot reading completed",
        HTTP_STATUS.OK
      );
    } catch (error) {
      console.error("Error in drawCards:", error);
      return ApiResponse.error(
        "Failed to draw tarot cards",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
}
