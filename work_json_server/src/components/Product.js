import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function Product(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:9999/products")
            .then(result => setProducts(result.data))
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Product List</h1>
                    <Table hovered bordered striped>
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
                                        <td>{index+1}</td>
                                        <td>{p?.name}</td>
                                        <td>{p?.price.toFixed(1)}</td>
                                        <td>
                                            <ul>
                                            {
                                                p?.category?.map(c =>(<li>{c}</li>))
                                            }
                                            </ul>
                                        </td>
                                        <td>
                                            <Button>Buy Now</Button>
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