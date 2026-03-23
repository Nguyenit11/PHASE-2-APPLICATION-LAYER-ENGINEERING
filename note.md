1. src/config/env.config.ts
   - Quản lý các biến môi trường như PORT và MONGODB_URI cho việc cấu hình hệ thống.

2. src/app.ts
   - Khởi tạo ứng dụng Express, cấu hình nhận JSON, gắn router với tiền tố /api, và tạo route "/" chào mừng.

3. src/routes/test.routes.ts
   - Định nghĩa route GET /api/test, gọi controller để trả về dữ liệu test (kiểm tra kết nối).

4. src/controllers/test.controller.ts
   - Xử lý logic cho route /api/test, trả về thông báo xác nhận kết nối thành công từ phía Controller.

5. src/index.ts
   - Chạy server Express ở cổng đã định nghĩa trong env.config, hiển thị link test khi server khởi động thành công.
