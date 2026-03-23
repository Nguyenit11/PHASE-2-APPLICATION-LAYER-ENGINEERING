import express, { Express } from "express";
import testRouter from "./routes/test.routes";

const app: Express = express();

app.use(express.json()); // Để app hiểu được dữ liệu JSON gửi lên

// Gắn route vào tiền tố /api
app.use("/api", testRouter); 

app.get("/", (req, res) => {
    res.send("Chào mừng bạn đến với Server của Nguyên!");
});
export default app;