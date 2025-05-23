import { Router } from "express";
import { drawTarotCards } from "../controllers/tarotReading.controller";

const router = Router();

/**
 * @swagger
 * /api/tarotReadings/draw:
 *   post:
 *     summary: Rút các lá bài tarot cụ thể
 *     description: Rút các lá bài tarot dựa trên danh sách `cardIds` được chỉ định. Hệ thống sẽ ngẫu nhiên xác định chiều xuôi/ngược và ý nghĩa tương ứng. Nếu có người dùng, kết quả sẽ được lưu lại.
 *     tags:
 *       - Tarot Reading
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cardIds
 *             properties:
 *               cardIds:
 *                 type: array
 *                 description: Danh sách ID các lá bài cần rút
 *                 items:
 *                   type: string
 *                 example: ["664b123abcde456f7890abcd", "664b234bcdef567g8901bcde"]
 *               question:
 *                 type: string
 *                 description: Câu hỏi của người dùng (tuỳ chọn)
 *                 example: Tôi nên làm gì để cải thiện công việc?
 *     responses:
 *       200:
 *         description: Rút bài thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Tarot reading completed
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     accountId:
 *                       type: string
 *                       example: 6631a1b6e4a844b0fbb6f9b1
 *                     question:
 *                       type: string
 *                       example: Tôi nên làm gì để cải thiện công việc?
 *                     spread:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           cardId:
 *                             type: string
 *                             example: 664b123abcde456f7890abcd
 *                           isReversed:
 *                             type: boolean
 *                             example: false
 *                           meaning:
 *                             type: string
 *                             example: Khởi đầu mới, hành động mà không sợ hãi
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi hệ thống
 */

router.post("/draw", drawTarotCards);

export default router;
