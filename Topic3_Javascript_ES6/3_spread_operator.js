// Sử dụng toán tử spread (rải) các phần tử của một mảng
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 5];
const numbers3 = [7, 8, 9, true, "Hi"];

// Bổ sung 1 phần tử mới vào numbers2
numbers2.push("A");
// Gộp mảng
const newNumbers = [...numbers1, ...numbers3, ...numbers2];
console.log(newNumbers);

for(let i=0; i<newNumbers.length; i++){
    console.log(newNumbers[i]);
}