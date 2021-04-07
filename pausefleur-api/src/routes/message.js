import express from "express";

import validate from "../services/validation";
import { message } from "../schemas/message";
import { addMessage, getIncome } from "../controllers/message";

const router = express.Router();

router.post("", validate(message), addMessage);

router.get("/pending", getIncome);

export default router;
