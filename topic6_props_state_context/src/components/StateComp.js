import react, {Component, use, useState} from "react"

// class StateComp extends Component{
//     // Hàm khởi tạo khi component này được gọi nó sẽ gọi tự động
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//         };
//     }

//     // method
//     increment(){
//         this.setState({count: this.state.count + 1});
//     }

//     render(){
//         return (
//             <div>
//                 <div>Count: {this.state.count}</div>
//                 <button onClick={()=>this.increment()}>Increment</button>
//             </div>
//         )
//     }
// }

// Function component
// function StateComp(){
//     // Khai báo 1 state trong function component
//     const [count, setCount] = useState(0);
//     const incrementCount = ()=>{
//         // Cập nhật lại giá trị của count
//         setCount(count+1);
//     }
//     return (
//         <div>
//             <div>Count: {count}</div>
//             <button onClick={()=>incrementCount()}>Increment</button>
//         </div>
//     );
// }

function StateComp({productData, title}){
    // Khai báo 1 state
    const [products, setProducts] = useState(productData);
    const [detail, setDetail] = useState(false);
    const [item, setItem] = useState(null);

    // Hàm xử lý loại bỏ khỏi danh sách theo Id
    const removeProduct = (removeId)=>{
        // Lấy các phần tử trong products có id != removeId
        const result = products?.filter(p => p.id !== removeId);
        // Cập nhật lại dữ liệu cho state 'products'
        setProducts(result);
    }

    // Hàm xử lý hiển thị details
    const showDetails = (p)=>{
        setDetail(true);
        setItem(p);
    }

    return (
        <div>
            <h1>{title}</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(p => (
                            <tr key={p?.id}>
                                <td>{p?.id}</td>
                                <td>{p?.name}</td>
                                <td>{p?.price}</td>
                                <td>
                                    <button onClick={()=>showDetails(p)}>Details</button>
                                </td>
                                <td>
                                    <button onClick={()=>removeProduct(p?.id)}>x</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                detail==true? <Detail item={item}/> :""
            }

        </div>
    );
}

function Detail({item}){
    return (
        <div>
            <div>ID: {item?.id}</div>
            <div>Name: {item?.name}</div>
            <div>Price: {item?.price}</div>
        </div>
    );
}

export default StateComp;