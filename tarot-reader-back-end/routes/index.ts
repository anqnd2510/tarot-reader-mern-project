import { Router } from "express";
import accountRoutes from "./account.route";
import tarotCardRoutes from "./tarotCard.route";
import tarotReadingRoutes from "./tarotReading.route";

const router = Router();

router.use("/accounts", accountRoutes);
router.use("/tarotCards", tarotCardRoutes);
router.use("/tarotReadings", tarotReadingRoutes);

export default router;
