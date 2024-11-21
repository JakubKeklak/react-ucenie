import './productCard.css'
import Label from './parts/Label'
import Button from './button'

const ProductCard = ({ product, pushProduct, disabled }) => {
    return (
        <div className="product__card">
            <div className="product__card__description">
                <h2>{product.name}</h2>
                <p>Typ: {product.description}</p>
            </div>
            <p>Cena: {product.price}€</p>
            <img src={product.image} alt="product" />
            <Button text="+" variant="secondary" buttonFunction={() => pushProduct( product)} disabledButton={disabled}/> 
                <div className={`product__add ${disabled ?  'product__add--anim' : ''}`}>
                    <Label>Produkt pridany</Label>
                </div>
        
            
        </div>
    )
}

export default ProductCard