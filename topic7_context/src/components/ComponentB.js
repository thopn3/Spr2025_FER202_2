// Bước 3: Tạo mới ComponentB để sử dụng DataContext
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ComponentB = ()=>{
    const {data, setData} = useContext(DataContext);// Trả về đối tượng từ DataContext

    return (
        <div>
            <h2>Component B</h2>
            <div>Data from context: {data}</div>
            <button onClick={()=>setData("Data updated by Component B")}>
                Update data context from Component B
            </button>
        </div>
    );
}

export default ComponentB;