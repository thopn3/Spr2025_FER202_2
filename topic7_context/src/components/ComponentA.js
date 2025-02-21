// Bước 2: Tạo mới ComponentA để sử dụng DataContext
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ComponentA = ()=>{
    const {data, setData} = useContext(DataContext);// Trả về đối tượng từ DataContext
    return (
        <div>
            <h2>Component A</h2>
            <div>Data from context: {data}</div>
            <button onClick={()=>setData("Data updated by Component A")}>
                Update data context from Component A
            </button>
        </div>
    );
}

export default ComponentA;