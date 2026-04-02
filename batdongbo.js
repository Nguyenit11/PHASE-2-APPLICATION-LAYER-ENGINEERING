// Học bất đồng bộ  
console.log('Thực hành đọc file thể hiện bất đồng bộ')
let fileData=null;
console.log('Bước 1: Chuẩn bị dọc file data, dự kiến mất 3 giây');
console.log('Bước 2: Đọc file data và thực thi hàm readFileData');

const readFileData = () => {
    setTimeout(() => {
        console.log('Bước 3: Đọc file data thành công đưa vào fileData');
        fileData = 'Hello world';
    }, 3000);
}

// Thực thi hàm readFileData
readFileData();

console.log('Bước 4: Kết thúc và hiển thị fileData', fileData);