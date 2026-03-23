import { Request, Response } from "express";

export const getTestData = (req: Request, res: Response) => {
    res.json({ message: "Kết nối thành công từ Controller!" });
};