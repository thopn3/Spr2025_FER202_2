import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function CreateProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/products")
            .then(result => setProducts(result.data));
    }, []);

    const uniqueCategories = [...new Set(products.flatMap(item => item.category))];

    return (
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" min={0} max={500} />
                </Form.Group>
                <Form.Select>
                    {
                        uniqueCategories?.map(c => (
                            <option value={c}>{c}</option>
                        ))
                    }
                </Form.Select>
                <Button>Save</Button>
            </Form>
        </Container>
    )
}

export default CreateProduct;