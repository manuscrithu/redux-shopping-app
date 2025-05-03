import { Row, Col } from "antd";
import ProductCard from "../components/ProductCard/ProductCard";
import { data } from "../assets/core/data";
import { Product } from "../types";

function Home() {
    return (
        <Row gutter={[16, 24]} justify="space-between">
            {data.map((item: Product) => (
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
    );
}

export default Home;