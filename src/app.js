const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // Để đọc được dữ liệu JSON gửi lên

//Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Định nghĩa thông tin cơ bản cho Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hệ sinh thái CLB MIT API',
      version: '1.0.0',
      description: 'Tài liệu hướng dẫn sử dụng API Quản lý Câu lạc bộ',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
  },
  // Đường dẫn tới các file chứa ghi chú Swagger (nằm trong thư mục routes)
  apis: ['./src/routes/*.js'], 
};

const specs = swaggerJsdoc(swaggerOptions);

// Tạo đường dẫn /api-docs để xem giao diện Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Route kiểm tra server
app.get('/', (req, res) => {
  res.send('Server Hệ sinh thái CLB MIT đang chạy...');
});

const clubRoutes = require('./routes/club_routes');
app.use('/api/clubs', clubRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});