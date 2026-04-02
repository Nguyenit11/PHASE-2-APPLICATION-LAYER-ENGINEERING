//Học về callback
// callback là hàm gọi lại và được truyền tham số cho hàm khác
function handle() {
    console.log("Do something...");
}
setTimeout(handle, 3000);
// => handle là callback


console.log("----");    
//callback hell là khi có nhiều callback lồng nhau
// Ví dụ về callback hell: gọi nhiều tác vụ bất đồng bộ lồng nhau khiến code khó hiểu
console.log("Bắt đầu callback hell:");
setTimeout(() => {
    console.log("1. Lấy user từ DB");
    setTimeout(() => {
        console.log("2. Lấy danh sách đơn hàng của user");
        setTimeout(() => {
            console.log("3. Lấy chi tiết sản phẩm của đơn hàng");
            setTimeout(() => {
                console.log("4. Hoàn thành chuỗi xử lý callback lồng nhau!");
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);
 // => callback hell là khi có nhiều callback lồng nhau khiến code khó hiểu và bảo trì


console.log("----");



