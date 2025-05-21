import TarotCard from "../models/tarotCard.model";
import {
  ITarotCard,
  ITarotCardRequest,
} from "../interfaces/tarotCard.interface";

export class TarotCardRepository {
  async createTarotCard(tarotCardData: ITarotCardRequest): Promise<ITarotCard> {
    const tarotcard = new TarotCard(tarotCardData);
    return await tarotcard.save();
  }

  async findTarotCardById(id: string): Promise<ITarotCard | null> {
    return await TarotCard.findById(id);
  }

  async findAllTarotCards(): Promise<ITarotCard[]> {
    return await TarotCard.find();
  }

  async updateTarotCard(
    id: string,
    updateData: Partial<ITarotCard>
  ): Promise<ITarotCard | null> {
    return await TarotCard.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteTarotCard(id: string): Promise<ITarotCard | null> {
    return await TarotCard.findByIdAndDelete(id);
  }
}
