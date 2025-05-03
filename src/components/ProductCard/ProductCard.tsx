import './ProductCard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cartSlice'
import { RootState } from '../../store'
import { Product, CartItem } from '../../types'

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const dispatch = useDispatch()
    const cartItem = useSelector((state: RootState) => 
        state.cart.cartItems.find((item: CartItem) => item.id === product.id)
    )

    function handleAddToCart() {
        dispatch(addToCart(product))
    }

    function handleRemoveItem() {
        dispatch(removeFromCart(product))
    }

    return (
        <div className="card-container">
            <div className="card-title">{product.title}</div>
            <div className="card-img"><img src={product.img} alt={product.title} /></div>
            <div className="card-desc">{product.description}</div>
            <h3>${product.price.toFixed(2)}</h3>
            <div className="card-footer">
                <button onClick={handleAddToCart}>Add to cart</button>
                {cartItem && (
                    <>
                        <p>{cartItem.quantity} {cartItem.quantity === 1 ? 'item' : 'items'} in the cart</p>
                        <button onClick={handleRemoveItem}>Remove</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductCard
