import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row><Col>Header</Col></Row>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Product/>}/>
              <Route path='/products' element={<Product/>}/>
              <Route path='/products/:id' element={<Details/>}/>
            </Routes>
          </Col>
        </Row>
        <Row><Col>Footer</Col></Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
