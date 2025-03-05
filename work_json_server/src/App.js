import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Details from './components/Details';
import CreateProduct from './components/CreateProduct';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>Header</Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Product/>}/>
              <Route path='/products' element={<Product/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/products/:id' element={<Details/>}/>
              <Route path='/products/create' element={<CreateProduct/>}/>
            </Routes>
          </Col>
        </Row>
        <Row><Col>Footer</Col></Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
