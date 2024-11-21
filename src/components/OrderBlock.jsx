import './OrderBlock.css'

import { useContext } from 'react'
import { ProductContext } from '../context/dataContext'
import Form from './form'
import Button from './button'

const OrderBlock = () => {
    const { productSummaries, removeProduct, incrementProduct, decrementProduct, showCalc, handleShowCalc, disabled } = useContext(ProductContext);
    const sum = productSummaries.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return (
        <div className={`cennik__kalk ${showCalc ? 'cennik__kalk--open' : ''} `} >
            <div className="container">
                <h2 className='cennik__kalk__title'>Kalkulačka</h2>
                <p>
                    Vyuzite nasu orientacnu kalkulacku a zistite cenu vasho tepla.
                </p>
                <p>
                    V prípade odberu väčšieho množstva Vám vieme poskytnúť zaujímavé zľavy, preto nas nevahajte <a href="/contact" >kontaktovat</a>.
                </p>
                <ul className='cennik__products-list'>
                    {productSummaries.map((product, index) => {
                        return <li className={`product__card ${disabled ? 'product__card--show' : ''}`} key={index}>
                            <div>
                                <span>{product.name}</span>
                                <br />
                                <span>{product.description}</span>
                            </div>
                            <Button text="-" variant="secondary" buttonFunction={() => decrementProduct(product)} />
                            <span >{product.quantity}</span>
                            <Button text="+" variant="secondary" buttonFunction={() => incrementProduct(product)} />
                            <span>{product.price * product.quantity}€</span>
                            <Button text="X" variant="primary" buttonFunction={() => removeProduct(product)} />
                        </li>
                    }
                    )}
                    <div className="cennik__sumary">
                        <span>Sucet: </span><span>{sum}</span><span>€</span>
                    </div>
                </ul>
                {productSummaries.length > 0 && <Form productSummaries={productSummaries} sum={sum} type="product" />}
                <div onClick={handleShowCalc} className="cennik__kalk__close">Zavriet</div>
            </div>
        </div>
    )
}

export default OrderBlock