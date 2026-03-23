import app from "./app";
import { PORT } from "./config/env.config";

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
    console.log(`🔗 Link test của bạn: http://localhost:${PORT}/api/test`);
});