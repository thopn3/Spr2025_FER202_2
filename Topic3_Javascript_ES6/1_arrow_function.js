// Phương pháp cũ định nghĩa hàm
function sumNumbers(a, b){
    return a + b;
}

// Sử dụng Hàm mũi tên
const sumNumber1 = (a, b) => a + b;

console.log("Tổng 2 số = " + sumNumbers(10, 20));
console.log("Tổng 2 số = " + sumNumber1(10, 20));

function getMessage(){
    return "Hello World";
}

const getMessage1 = () => "Hello World"

console.log(getMessage());
console.log(getMessage1());

// Tính tổng của các phần tử trong mảng
const calculateElements = arr =>  {
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log("Total elements of array: " + calculateElements([1, 2, 3]));