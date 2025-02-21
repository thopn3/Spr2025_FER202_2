import { useEffect, useState } from "react";

function Example2() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [price, setPrice] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(resp => resp.json())
            .then(data => {
                if(search.length===0){
                    if(price==null)
                        setProducts(data?.products);
                    else
                        setProducts(data?.products?.filter(p=>p.price>price));
                }
                else{
                    if(price==null)
                        setProducts(data?.products?.filter(p => p.title.toLowerCase().startsWith(search.toLowerCase())));
                    else
                        setProducts(data?.products?.filter(p => 
                            p?.title.toLowerCase().startsWith(search.toLowerCase()) && p?.price > price));
                }
            })
            .catch(err => console.log(err.message));
    }, [search, price,]);

    return (
        <>
            <h2>List of Products</h2>
            <div>
                <input placeholder="Enter product title ..."
                    onChange={(e)=>setSearch(e.target.value)}/>
                {/* Nhập giá sản phẩm để lấy các sản phẩm có price > price cung cấp bởi người dùng */}
                <input placeholder="Enter price ..."
                    onChange={e=>setPrice(parseFloat(e.target.value))}/>
            </div>
            <ul>
                {
                    products?.map(p => (
                        <li key={p?.id}>{p?.title} - {p?.price}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Example2;