import express from "express";

import { getDaily, getNew, getQwack } from "../controllers/theme";

const router = express.Router();

router.get("/daily", getDaily);

router.get("/refresh", getNew);

router.get("/qwack", getQwack);

export default router;
