const sumNumbers = (...numbers) => {
    let result = 0;
    for(let item of numbers){
        result += item;
    }
    return result;
} 

console.log("Total = " + sumNumbers(1, 2, 3));
console.log("Total = " + sumNumbers(1, 2, 3, 5, 6));
console.log("Total = " + sumNumbers(1, 2));

// Truyền 1 mảng -> Ket hop voi toan tu spread
const arr = [6, 5, 7];
console.log("Total = " + sumNumbers(...arr)); //  sumNumbers(6, 5, 7)