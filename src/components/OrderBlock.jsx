import './OrderBlock.css'

import { useContext } from 'react'
import { ProductContext } from '../context/dataContext'
import Form from './form'
import Button from './button'
import { NavLink } from 'react-router-dom'

const OrderBlock = () => {
    const { productSummaries, removeProduct, incrementProduct, decrementProduct, showCalc, handleShowCalc, disabled } = useContext(ProductContext);
    const sum = productSummaries.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return (
        <div className={`order-block ${showCalc ? 'order-block--open' : ''} `} >
            <div className="container order-block__wrapper">
                <h2 className='order-block__title'>Kalkulačka</h2>
                <p>
                    Vyuzite nasu orientacnu kalkulacku a zistite cenu vasho tepla.
                </p>
                <p>
                    V prípade odberu väčšieho množstva Vám vieme poskytnúť zaujímavé zľavy, preto nas nevahajte <NavLink to="/contact" >kontaktovat</NavLink>.
                </p>
                <ul className='order-block__list'>
                    {productSummaries.map((product, index) => {
                        return <li className={`order-block__card ${disabled ? 'order-block__card--show' : ''}`} key={index}>
                            <div className='order-block__card-description'>
                                <span className='order-block__card-name'>{product.name}</span>
                             
                                <span >{product.description}</span>
                            </div>
                            <div className='order-block__card-buttons'>
                                <Button text="-" variant="tertiary" buttonFunction={() => decrementProduct(product)} />
                                <span >{product.quantity}</span>
                                <Button text="+" variant="tertiary" buttonFunction={() => incrementProduct(product)} />
                            </div>
                            <span className='order-block__card-price'>{product.price * product.quantity}€</span>
                            <Button text="X" variant="primary" buttonFunction={() => removeProduct(product)} />
                        </li>
                    }
                    )}
                </ul>
                
                {productSummaries.length > 0 &&
                    <>
                        <div className="cennik__sumary">
                            <span>Sucet: </span><span>{sum}</span><span>€</span>
                        </div>
                        <p>
                            Pre dokoncenie nezaveznej objednavky vyplnte nasledujuci formular a my sa vam ozveme.
                        </p>
                        <Form productSummaries={productSummaries} sum={sum} type="product" />
                    </> 
                }
                <div onClick={handleShowCalc} className="cennik__kalk__close">Zavriet</div>
            </div>
        </div>
    )
}

export default OrderBlock