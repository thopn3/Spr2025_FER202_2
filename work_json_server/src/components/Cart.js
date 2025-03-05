import { useState } from "react";
import { Col, Row, Container, Table, Form, Button } from "react-bootstrap";

export default function Cart(){
    const [cart, setCart] = useState(()=>{
        return JSON.parse(localStorage.getItem('cart')) || [];
    });
    
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Shopping Cart</h2>
                </Col>
            </Row>
            <Row>
                <Col md={7}>
                    {
                        cart.length==0 ? <div>Cart is empty!</div> :
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Money</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{(item.quantity*item.price).toFixed(1)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    }
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>ShipAddress</Form.Label>
                        <Form.Control style={{border:"1px solid gray"}}/>
                    </Form.Group>
                    <Button variant="primary">Place Order</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    Total Price: 
                </Col>
            </Row>
        </Container>
    );
}