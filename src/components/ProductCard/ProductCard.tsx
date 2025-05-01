import './ProductCard.scss'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Cart/cartSlice'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: number,
    title: string,
    img: any,
    description: string,
    price?: number
  }
}

function ProductCard({ product }: ProductCardProps) {
    const [itemCount, setItemCount] = useState<number>(0)
    const dispatch = useDispatch()

    function handleAddToCart() {
        dispatch(addToCart(product))
        setItemCount(() => itemCount + 1)
    }

    function handleRemoveItem() {
        dispatch(removeFromCart(product))
        setItemCount(() => itemCount - 1)
    }

    return (
        <div className="card-container">
            <div className="card-title">{product.title}</div>
            <div className="card-img"><img src={product.img} /></div>
            <div className="card-desc">{product.description}</div>
            <h3>${product.price}</h3>
            <div className="card-footer">
                <button onClick={handleAddToCart}>Add to cart</button>
                <p>{itemCount} {itemCount==1?'item':'items'} in the cart</p>
                {itemCount>0? <button onClick={handleRemoveItem}>Remove</button> : undefined}
            </div>
        </div>
    )
}

export default ProductCard
