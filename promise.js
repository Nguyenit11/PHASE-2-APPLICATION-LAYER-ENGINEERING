// Học về promise
//promise là 1 lời hứa về kết quả của 1 tác vụ bất đồng bộ
const promise = new Promise((resolve, reject) => {
    resolve('Tuyệt vời'); //fulfilled: thành công
    // reject('Ôi không'); //rejected: thất bại
});
// console.log(promise); // trả về object Promise { <pending> } khi chưa resolve hoặc reject

console.log('----');
// Sử dụng phương thức then 
//phương thức then có 2 ngăn xử lý: ngăn thành công và ngăn thất bại
console.log('Sử dụng phương thức then');
promise.then(
    (error) => {
        console.log('Hoàn thành: ', error); //Hoàn thành và kết quả là 'Tuyệt vời'
    },
    (result) => {
        console.log('Thất bại: ', result); //Thất bại và kết quả là 'Ôi không'
    }
);
// đổi error và result để chứng tỏ ngăn error là thành công và result là thất bại
//(điều này làm trái logic của promise, error phải là ngăn thứ 2)

//Dùng phương thức catch để bắt lỗi
console.log('Sử dụng phương thức catch');
const exampleCatch = new Promise((resolve, reject) => {
    // reject('HUHUHUHU');
    resolve('Hí hí');
});

exampleCatch
    .then((success) => {
            console.log('Hoàn thành: ', success); //Hoàn thành và kết quả là 'Hí hí'
            return 123;
        })
    .then((success) => {
        console.log('Hoàn thành: ', success); //Hoàn thành và kết quả là 123
    })
    .catch((bug) => {
        console.log('Thất bại: ', bug); //Thất bại và kết quả là 'HUHUHUHU'
    });
//mẹo catch là lưới để bắt bọ(lỗi) khi không thể xử lý trong then

// Kết quả:
// ----
// Sử dụng phương thức then
// Sử dụng phương thức catch
// Hoàn thành:  Tuyệt vời
// Hoàn thành:  Hí hí
// Hoàn thành:  123


// Giải thích:
// dùng .then(), kết quả của hàm then trước sẽ được truyền tiếp cho hàm then sau.

// Bước 1: exampleCatch được resolve('Hí hí').

// Bước 2 (Hàm then thứ nhất): Nhận được chữ 'Hí hí', in ra màn hình. 
// Sau đó bạn thực hiện lệnh return 123;.

// Bước 3 (Hàm then thứ hai): Cái return 123 ở trên đóng vai trò là "kết quả mới" cho lời hứa tiếp theo. 
// Vì vậy, biến success ở hàm then thứ hai này sẽ nhận giá trị là 123.

//Đấy được gọi là Promise Chaining (Chuỗi lời hứa)