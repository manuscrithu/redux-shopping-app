import { Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import ProductCard from "./components/ProductCard/ProductCard";
import { data } from "./assets/core/data";
import './App.css';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="app-container">
      <div className="cart-button-container">
        <Button
          className="add-to-cart-btn"
          type="primary"
          shape="round"
          icon={<ShoppingCartOutlined />}
        >
          View Cart
        </Button>
      </div>

      <Row gutter={[16, 24]} justify="space-between">
        {data.map((item: any) => (
          <Col
            key={item.id}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={6}
          >
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
