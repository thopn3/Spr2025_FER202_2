import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        try {
            axios.get("http://localhost:9999/products/L4M")
                .then(result => setProduct(result.data));
        } catch (error) {
            console.error(error);
        }
    })

    return (
        <Container fluid>
            <Row>
                <Col><Link to={'/'} className="btn btn-primary">Home page</Link></Col>
            </Row>
            <Row>
                <Col>
                    <h1>Product Details</h1>
                    <div>Id: {product?.id}</div>
                    <div>Name: {product?.name}</div>
                    <div>Price: {product?.price}</div>
                    <div>
                        Category:
                        <ul>
                            {
                                product?.category?.map(c => (<li>{c}</li>))
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Details;