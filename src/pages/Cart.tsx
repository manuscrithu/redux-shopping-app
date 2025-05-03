import { Table, Button, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../src/store';
import { CartItem } from '../../src/types';
import { addToCart, removeFromCart } from '../../src/store/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const columns = [
        {
            title: 'Product',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `$${price.toFixed(2)}`,
        },
        {
            title: 'Quantity',
            key: 'quantity',
            render: (record: CartItem) => (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button onClick={() => dispatch(removeFromCart(record))}>-</Button>
                    <InputNumber 
                        min={0} 
                        value={record.quantity} 
                        readOnly 
                    />
                    <Button onClick={() => dispatch(addToCart(record))}>+</Button>
                </div>
            ),
        },
        {
            title: 'Total',
            key: 'total',
            render: (record: CartItem) => `$${(record.price * record.quantity).toFixed(2)}`,
        },
    ];

    const total = cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <Table 
                dataSource={cartItems} 
                columns={columns} 
                rowKey="id"
                pagination={false}
                summary={() => (
                    <Table.Summary>
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0} colSpan={3}>Total</Table.Summary.Cell>
                            <Table.Summary.Cell index={1}>${total.toFixed(2)}</Table.Summary.Cell>
                        </Table.Summary.Row>
                    </Table.Summary>
                )}
            />
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <Button onClick={() => navigate('/')}>Continue Shopping</Button>
                <Button type="primary" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
}

export default Cart;