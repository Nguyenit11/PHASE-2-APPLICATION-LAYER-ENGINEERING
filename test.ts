import express,{Request, Response} from "express";
const app = express(); // 2. Phải tạo app
export const handleHome = (req: Request, res: Response) => {
    res.send("Giờ thì tôi đã hiểu req/res là gì rồi!");
}; 

app.get("/", handleHome); // 4. Gắn cái hàm vào đường dẫn

// 5. QUAN TRỌNG: Phải có dòng này thì Server mới không bị "Clean exit"
app.listen(8387, () => {
    console.log("Server đang chạy tại http://localhost:8387");
});