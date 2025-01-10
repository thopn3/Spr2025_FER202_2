/*
*   Demo sử dụng core module 'http' trong nodejs -> Build: Web server
*/
// Khai báo module để sử dụng
const http = require("http");

// Khai báo thông tin cấu hình cho web server
const hostname = "localhost";
const portNumber = 3000;

// Khởi tạo web server
const server = http.createServer((req, res)=>{
    // Thiết lập thông tin cho gói tính response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to NodeJS web server</h1>");
});

// Lắng nghe các request (client) gửi tới web server
server.listen(portNumber, hostname, ()=>{
    console.log(`Web server running at: ${hostname}:${portNumber}`);
});
