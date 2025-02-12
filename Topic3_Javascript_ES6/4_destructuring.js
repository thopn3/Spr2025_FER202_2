const arr = [10, 20, "Hello", 40, true];
// Phân rã các phần tử của mảng thành các biến mới
const [n1, n2, n3, ...n4] = arr;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

const product = {
    id: 1,
    name: "Product 1",
    price: 50.5
};
// Phân rã đối tượng thành các biến tương ứng với các thuộc tính của nó
const {id, name, price} = product;
console.log(`Product infomation -> Id: ${id}, Name: ${name}, Price: ${price}`);

// BT1:
const productList = [
    {id: 1, name: "Product 1", price: 20.5},
    {id: 2, name: "Product 2", price: 10.5},
    {id: 3, name: "Product 3", price: 50.0}
];

// Áp dụng các kỹ thuật: Loop, Destructuring -> In ra danh sách các sản phẩm
console.log("ID\tName\t\tPrice");
for (const {id, name, price} of productList) {
    console.log(`${id}\t${name}\t${price}`);
}

// BT2: Viết 1 hàm với tham số đầu vào là 1 đối tượng -> In ra thông tin của đối tượng đó
const printObject = ({id, name, gender}) => {
    console.log(`Id: ${id}, Name: ${name}, Gender: ${gender==true?'Male':'Female'}`);
}

const student = {id: "SE1001", name: "Phạm Tuấn Hải", gender: true};
printObject(student);

