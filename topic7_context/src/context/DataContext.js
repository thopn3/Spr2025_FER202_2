// Bước 1: Tạo 1 context chứa dữ liệu dùng chung cho các components khác
import {createContext, useState} from "react"

const DataContext = createContext();

// Tạo Provider component
export const DataProvider = ({children}) => {
    const [data, setData] = useState("Initial Data");

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;