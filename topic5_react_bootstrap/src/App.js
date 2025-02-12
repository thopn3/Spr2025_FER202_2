import './App.css';
import { Container, Row, Col,Card, Button } from "react-bootstrap";

function App() {
  const array = [
    {
      "id": 1,
      "name": "Pizza1",
      "price": 20.5,
      "image": "pizza1.jpg"
    },
    //....
  ];
  return (
    <Container>
      <Row>
        <Col>Header</Col>
      </Row>
      <Row>
        <Col className='d-none d-sm-block col-sm-2 col-md-3'>Left</Col>
        <Col className='col-12 col-sm-10 col-md-6'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-none d-md-block col-md-3'>Right</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  );
}

export default App;
