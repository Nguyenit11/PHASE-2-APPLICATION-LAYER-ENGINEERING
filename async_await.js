// Học async await
// Hàm giả lập việc nấu mì trả về một "Lời hứa" (Promise)
const nauMi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Mì đã chín! (Nước đã sôi xong)");
            resolve("Tô mì nóng hổi"); 
        }, 5000);
    });
};

async function vaoBep() {
    console.log("1. Đi vào bếp & Bật bếp");

    // Bắt đầu nấu mì nhưng dùng await để giữ kỷ luật
    const promiseNauMi = nauMi(); 

    console.log("2. Đi rửa mặt (Tranh thủ lúc đợi mì)");

    // Đợi cho đến khi cái Promise "nauMi" hoàn thành
    const ketQua = await promiseNauMi; 

    console.log("4. Nhận lấy: " + ketQua);
    console.log("5. Ăn mì thôi!");
}

vaoBep();