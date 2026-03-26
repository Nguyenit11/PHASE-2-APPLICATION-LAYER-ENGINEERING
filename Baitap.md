BT1
<!-- Tự viết note ngắn giải thích vai trò của: - controller - service - repository - interface -->
Vai trò của controller: là nơi nhận yêu cầu và phản hồi cho client
service: Là nơi logic business , tính toán thuê, hóa đơn,.., rồi đượcc import vào controllers
repository: là nơi giao tiếp với database, xử lý tồn kho, đọc hóa đơn,..
interface: là khung hợp đồng, nó bắt buộc phải tuân theo 

BT2
<!-- Lấy một flow ví dụ như create order hoặc create product và chuyển từ cách làm “controller ôm hết” sang cấu trúc controller → service → repository.
 -->
export class OrderRepository {
    saveOrder(data: any) {
        // Giả lập lưu dữ liệu đơn hàng vào CSDL
        console.log("Đã lưu dữ liệu đơn hàng vào Database:", data);
    }
}

import { OrderRepository } from "../repositories/order.repository";

export class OrderService {
    private repo = new OrderRepository();

    calculateTotal(price: number, toppingPrice: number) {
        // Chỗ trống 1: Bạn hãy tự viết phép cộng price và toppingPrice ở đây
        const total = price + toppingPrice;
        
        // Chỗ trống 2: Gọi thủ kho lưu lại
        this.repo.saveOrder({ total });

        return total;
    }
}