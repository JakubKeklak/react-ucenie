import './productCard.css'
import Label from './parts/Label'
import Button from './button'
import Image from './parts/Image'

const ProductCard = ({ product, pushProduct, disabled }) => {
    return (
        <div className="product__card">
            <div className='product__card__image'>
                <Image src={product.image} alt="product" />
            </div>
            <div className="product__card__description">
                <h2>{product.name}</h2>
                <p className="product__card__box">
                    <span className="product__card__left">Typ:</span>
                    <span className="product__card__pright">{product.description}</span>
                </p>
                <p className="product__card__box">
                    <span className="product__card__left">Vyhrevnost:</span>
                    <span className="product__card__pright">13,1 MJ/kg</span>
                </p>
            </div>
            <p className="product__card__box product__card__box--price">
                <span className="product__card__price">{product.price}€</span>
                <span >/prm</span>  
            </p>
            <Button text="Pridat " variant="secondary" buttonFunction={() => pushProduct(product)} disabledButton={disabled} />
            <div className={`product__add ${disabled ? 'product__add--anim' : ''}`}>
                <Label>Produkt pridany</Label>
            </div>


        </div>
    )
}

export default ProductCard