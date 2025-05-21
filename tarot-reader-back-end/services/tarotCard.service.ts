import { HTTP_STATUS } from "../constants/httpStatus";
import { ApiResponse } from "../utils/apiResponse";
import { TarotCardRepository } from "../repositories/tarotCard.repository";

export class TarotCardService {
  constructor(private tarotCardRepo = new TarotCardRepository()) {}

  /**
   * Creates a new tarot card.
   * @param {ITarotCardRequest} tarotCardData - The data for the new tarot card.
   * @returns {Promise<ITarotCardResponse>} - A promise that resolves to the created tarot card.
   * @throws {Error} - Throws an error if the card already exists or if there is an issue with the database.
   */
  async createTarotCard(tarotCardData: any) {
    try {
      const tarotCard = await this.tarotCardRepo.createTarotCard(tarotCardData);
      return ApiResponse.success(
        tarotCard,
        "Tarot card created successfully",
        HTTP_STATUS.CREATED
      );
    } catch (error: any) {
      console.error("Error in createTarotCard method:", error);
      return ApiResponse.error(
        "Failed to create tarot card",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
  /**
   * Get a tarot card by its ID.
   * @param {string} id - The ID of the tarot card.
   * @returns {Promise<ITarotCardResponse>} - A promise that resolves to the retrieved tarot card.
   * @throws {Error} - Throws an error if the card does not exist or if there is an issue with the database.
   */
  async getTarotCardById(id: string) {
    try {
      const tarotCard = await this.tarotCardRepo.findTarotCardById(id);
      if (!tarotCard) {
        return ApiResponse.error("Tarot card not found", HTTP_STATUS.NOT_FOUND);
      }
      return ApiResponse.success(
        tarotCard,
        "Tarot card retrieved successfully",
        HTTP_STATUS.OK
      );
    } catch (error: any) {
      console.error("Error in getTarotCardById method:", error);
      return ApiResponse.error(
        "Failed to retrieve tarot card",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
  /**
   * Get all tarot cards.
   * @returns {Promise<ITarotCardResponse[]>} - A promise that resolves to the list of tarot cards.
   * @throws {Error} - Throws an error if there is an issue with the database.
   */
  async getAllTarotCards() {
    try {
      const tarotCards = await this.tarotCardRepo.findAllTarotCards();
      return ApiResponse.success(
        tarotCards,
        "Tarot cards retrieved successfully",
        HTTP_STATUS.OK
      );
    } catch (error: any) {
      console.error("Error in getAllTarotCards method:", error);
      return ApiResponse.error(
        "Failed to retrieve tarot cards",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
  /**
   * Update a tarot card by its ID.
   * @param {string} id - The ID of the tarot card.
   * @param {ITarotCardRequest} updateData - The data to update the tarot card with.
   * @returns {Promise<ITarotCardResponse>} - A promise that resolves to the updated tarot card.
   * @throws {Error} - Throws an error if the card does not exist or if there is an issue with the database.
   */
  async updateTarotCard(id: string, updateData: any) {
    try {
      const tarotCard = await this.tarotCardRepo.updateTarotCard(
        id,
        updateData
      );
      if (!tarotCard) {
        return ApiResponse.error("Tarot card not found", HTTP_STATUS.NOT_FOUND);
      }
      return ApiResponse.success(
        tarotCard,
        "Tarot card updated successfully",
        HTTP_STATUS.OK
      );
    } catch (error: any) {
      console.error("Error in updateTarotCard method:", error);
      return ApiResponse.error(
        "Failed to update tarot card",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
  /**
   * Delete a tarot card by its ID.
   * @param {string} id - The ID of the tarot card.
   * @returns {Promise<ITarotCardResponse>} - A promise that resolves to the deleted tarot card.
   * @throws {Error} - Throws an error if the card does not exist or if there is an issue with the database.
   */
  async deleteTarotCard(id: string) {
    try {
      const tarotCard = await this.tarotCardRepo.deleteTarotCard(id);
      if (!tarotCard) {
        return ApiResponse.error("Tarot card not found", HTTP_STATUS.NOT_FOUND);
      }
      return ApiResponse.success(
        tarotCard,
        "Tarot card deleted successfully",
        HTTP_STATUS.OK
      );
    } catch (error: any) {
      console.error("Error in deleteTarotCard method:", error);
      return ApiResponse.error(
        "Failed to delete tarot card",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
}
