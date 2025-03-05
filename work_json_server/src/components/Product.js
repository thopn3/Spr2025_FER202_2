import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/products")
            .then(result => setProducts(result.data))
    }, []);

    const handleAddCart = (id) => {
        axios.get("http://localhost:9999/products/"+id)
            .then(res => setProduct(res.data))
            .catch(err=>console.error(err));
        
        // Kiểm tra product != null
        if(product!=null){
            // Kiểm tra nếu trong cart đã có sản phẩm trước đó thì tăng quantity. Ngược lại, thêm vào cart
            if(localStorage.getItem('cart')!=null){
                setCart(JSON.parse(localStorage.getItem('cart')));

                // Duyệt từng item trong cart, so sánh id = id (tham số) không
                cart?.map(item => {
                    if(item.id == id){
                        item.quantity++; // Tăng số lượng nếu đã tồn tại
                    }else{
                        // Thêm item mới vào cart
                        const newItem = {id:product.id,name:product.name,price:product.price,quantity:1};
                        setCart([...cart, newItem]);
                    }
                });
                // Cập nhật lại localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
            }else{
                // Trường hợp chưa có key 'cart' trong localStorage
                localStorage.setItem('cart', JSON.stringify(
                    [
                        {id:product.id,name:product.name,price:product.price,quantity:1}
                    ]
                ));
            }
        }
    }

    return (
        <Container fluid>
            <Row className="mb-3" style={{textAlign:"right"}}>
                <Col>
                    <Link to={'/products/create'}>Create new Product</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Product List</h1>
                    <div style={{textAlign:"right"}}>
                        Cart: 
                        <Link to={'/cart'}>
                            {cart.length > 0 ? cart.length : <span>0</span>}
                        </Link>
                    </div>
                    <Table hover bordered striped>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map((p, index) => (
                                    <tr key={p?.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to={'/products/' + p?.id}>
                                                {p?.name}
                                            </Link>
                                        </td>
                                        <td>{p?.price.toFixed(1)}</td>
                                        <td>
                                            <ul>
                                                {
                                                    p?.category?.map(c => (<li key={c}>{c}</li>))
                                                }
                                            </ul>
                                        </td>
                                        <td>
                                            <Button onClick={()=>handleAddCart(p?.id)}>Buy Now</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;