import express from "express";
import auth from "../middleware/authMiddleware.js";

import { explainWrongAnswer ,explainWrongAnswer2,explainWrongAnswer3} from "../controllers/openaiController.js";



const router = express.Router();

// router.get("/grade4gpquiz", generategreenplantsquiz);

router.post("/explain", explainWrongAnswer);

router.post("/explain4", explainWrongAnswer);
router.post("/explain2", explainWrongAnswer2);
router.post("/explain3", explainWrongAnswer3);

export default router;
