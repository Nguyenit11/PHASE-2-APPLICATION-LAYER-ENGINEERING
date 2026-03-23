<!-- Học viên tự mô tả bằng sơ đồ hoặc note: - app start từ đâu - config được nạp ra sao - routes/modules được bind ở đâu - request đi vào pipeline thế nào
 -->
 - app bắt đầu từ khởi động expressexpress, gắn các routes lại và được import vào index.ts
 - Server sẽ mở cổng từ config và chờ đợi 
 - trong giai đoạn đó, nếu truy cập vào api/test, nó nhận Request từ app.ts và nó sẽ chuyển vào routes để định nghĩa tuyến đường đi
 - controllers là nơi tiếp nhận và xử lý yêu cầu và vả phản hồi, sau đó routes sẽ nhập controllers và xuất ra màn hình ngay đường routes đã định nghĩa
 