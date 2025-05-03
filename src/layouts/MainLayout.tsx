import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Outlet } from "react-router-dom";
import { CartItem } from "../types";

function MainLayout() {
    const navigate = useNavigate();
    const totalItems = useSelector((state: RootState) =>
        state.cart.cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0)
    );

    function handleNavigate() {
        navigate('/cart')
    }

    return (
        <div className="app-container">
            <div className="cart-button-container" onClick={handleNavigate}>
                <Button
                    className="add-to-cart-btn"
                    type="primary"
                    shape="round"
                    icon={<ShoppingCartOutlined />}
                >
                    View Cart
                    <Badge offset={[15, 20]} color="red" count={totalItems} showZero={true} title="Item count" />
                </Button>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout