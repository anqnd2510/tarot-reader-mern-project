import { Router } from "express";
import accountRoutes from "./account.route";
import tarotCardRoutes from "./tarotCard.route";

const router = Router();

router.use("/accounts", accountRoutes);
router.use("/tarotCards", tarotCardRoutes);

export default router;
