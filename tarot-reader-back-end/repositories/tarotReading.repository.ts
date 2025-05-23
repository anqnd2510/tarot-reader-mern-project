import TarotReading from "../models/tarotReading.model";
import { ITarotReading } from "../interfaces/tarotReading.interface";

export class TarotReadingRepository {
  async saveReading(reading: Partial<ITarotReading>): Promise<ITarotReading> {
    const newReading = new TarotReading();
    return await newReading.save();
  }
}
