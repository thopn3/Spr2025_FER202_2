import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Details(){
    const {id} = useParams();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Product Details</h1>
                    <div>Id: {id}</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Details;