import { Router } from "express";
import { getPrice } from "../controllers/test.controller";

const router = Router();

// Định nghĩa tuyến đường: Khi khách gọi POST đến /tax, bồi bàn (Controller) sẽ ra tiếp khách
router.post("/tax", getPrice);

export default router;