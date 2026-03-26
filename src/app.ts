import express from "express";
import testRoutes from "./routes/test.routes"; // Import "bản đồ" đường đi

const app = express();
app.use(express.json());

// Gắn các tuyến đường đã định nghĩa vào tiền tố /api
app.use("/api", testRoutes); 

app.get("/", (req, res) => {
    res.send("Hello World - Server đã sẵn sàng xử lý logic!");
});

export default app;