import './productCard.css'

import Button from './button'

const ProductCard = ({ product, pushProduct }) => {
    return (
        <div className="product__card">
            <div className="product__card__description">
                <h2>{product.name}</h2>
                <p>Popis</p>
            </div>
            <p>Cena: {product.price}€</p>
            <img src="https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg" alt="product" />
            <div className="product__card__button" onClick={() => pushProduct(product)}>
                <Button text="+" variant="secondary"/>
            </div>
        </div>
    )
}

export default ProductCard