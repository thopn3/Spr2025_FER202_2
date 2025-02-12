import StateComp from "./components/StateComp";

function App() {
  // Tạo 1 tập dữ liệu mẫu
  const data = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 }
  ];

  return (
    <div>
      {/* Truyền dữ liệu cho component thông qua Attributes của element */}
      <StateComp productData={data} title="List of Products"/>
    </div>
  );
}

export default App;
