import { Router } from "express";
import { getTestData } from "../controllers/test.controller";

const router = Router();

router.get("/test", getTestData);

export default router;