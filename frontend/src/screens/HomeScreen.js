import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {Carousel} from 'react-bootstrap'
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Achraf Gaming Zone</title>
      </Helmet>


      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide01.jpg"
      alt="First slide"
    />
     <Carousel.Caption>
      <h3>GIGABYTE</h3>
      <p>Graphic Cards</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide02.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>AMD</h3>
      <p>Rayzen Processors</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide03.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Intel</h3>
      <p>New Gen Processors</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
