import express from "express";

import { getDaily, getNew } from "../controllers/theme";

const router = express.Router();

router.get("/daily", getDaily);

router.get("/refresh", getNew);

export default router;
