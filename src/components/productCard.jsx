import './productCard.css'

import Button from './button'

const ProductCard = ({ product, pushProduct }) => {
    return (
        <div className="product__card">
            <div className="product__card__description">
                <h2>{product.name}</h2>
                <p>Typ: {product.description}</p>
            </div>
            <p>Cena: {product.price}€</p>
            <img src={product.image} alt="product" />
            <Button text="+" variant="secondary" buttonFunction={() => pushProduct(product)}/>
        </div>
    )
}

export default ProductCard