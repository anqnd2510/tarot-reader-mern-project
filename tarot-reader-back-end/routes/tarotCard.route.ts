import { Router } from "express";
import * as tarotCardController from "../controllers/tarotCard.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: TarotCards
 *   description: API for managing tarot cards
 */

/**
 * @swagger
 * /api/tarotCards/create:
 *   post:
 *     summary: Create a new tarot card
 *     tags: [TarotCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - imageUrl
 *               - suit
 *               - number
 *               - reversedMeaning
 *             properties:
 *               name:
 *                 type: string
 *                 example: The Fool
 *               description:
 *                 type: string
 *                 example: A new beginning, adventure, and potential.
 *               imageUrl:
 *                 type: string
 *                 example: http://example.com/fool.jpg
 *               suit:
 *                 type: string
 *                 example: Major Arcana
 *               number:
 *                 type: integer
 *                 example: 0
 *               reversedMeaning:
 *                 type: string
 *                 example: Recklessness, foolishness, and lack of direction.
 *     responses:
 *       201:
 *         description: Tarot card created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/create", tarotCardController.createTarotCard);

/**
 * @swagger
 * /api/tarotCards/{id}:
 *   get:
 *     summary: Get a tarot card by ID
 *     tags: [TarotCards]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the tarot card
 *         schema:
 *           type: string
 *           example: 60d5ec49b3f1f8c8a4e4b0c1
 *     responses:
 *       200:
 *         description: Tarot card retrieved successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Tarot card not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", tarotCardController.getTarotCardById);

/**
 * @swagger
 * /api/tarotCards:
 *   get:
 *     summary: Get all tarot cards
 *     tags: [TarotCards]
 *     responses:
 *       200:
 *         description: A list of tarot cards
 *       400:
 *         description: Bad request
 *       404:
 *         description: Tarot cards not found
 *       500:
 *         description: Internal server error
 */
router.get("/", tarotCardController.getAllTarotCards);

/**
 * @swagger
 * /api/tarotCards/{id}:
 *   delete:
 *     summary: Delete a tarot card by ID
 *     tags: [TarotCards]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the tarot card to delete
 *         schema:
 *           type: string
 *           example: 60d5ec49b3f1f8c8a4e4b0c1
 *     responses:
 *       200:
 *         description: Tarot card deleted successfully
 *       404:
 *         description: Tarot card not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", tarotCardController.deleteTarotCard);

/**
 * @swagger
 * /api/tarotCards/{id}:
 *   put:
 *     summary: Update a tarot card by ID
 *     tags: [TarotCards]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the tarot card to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: The Fool
 *               description:
 *                 type: string
 *                 example: A new beginning, adventure, and potential.
 *               imageUrl:
 *                 type: string
 *                 example: http://example.com/fool.jpg
 *               suit:
 *                 type: string
 *                 example: Major Arcana
 *               number:
 *                 type: integer
 *                 example: 0
 *               reversedMeaning:
 *                 type: string
 *                 example: Recklessness, foolishness, and lack of direction.
 *     responses:
 *       200:
 *         description: Tarot card updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Tarot card not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", tarotCardController.updateTarotCard);

export default router;
