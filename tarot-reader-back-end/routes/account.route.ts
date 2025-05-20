import { Router } from "express";
import * as accountController from "../controllers/account.controller";

const router = Router();

/**
 * @swagger
 * /api/accounts/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - fullname
 *               - dob
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: StrongPass123!
 *               fullname:
 *                 type: string
 *                 example: John Doe
 *               dob:
 *                 type: string
 *                 format: date
 *                 example: 1995-01-01
 *     responses:
 *       200:
 *         description: Successfully registered
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/register", accountController.register);

/**
 * @swagger
 * /api/accounts/login:
 *   post:
 *     summary: Login user
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: StrongPass123!
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/login", accountController.login);

export default router;
