import { Request, Response } from "express";
import { TestService } from "../services/test.service";

const service = new TestService();

export const getPrice = (req: Request, res: Response) => {
    const { price } = req.body;
    const finalPrice = service.calculateTax(Number(price)); // Gọi đầu bếp
    
    res.json({ result: finalPrice });
};
