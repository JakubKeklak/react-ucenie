import './cennik.css'
import { productData } from '../data/productData'
import ProductCard from '../components/productCard'
import Text from '../components/text'
import Button from '../components/button'
import Form from '../components/form'
import { useState } from 'react'

const Cennik = () => {
    const [productSummaries, setProductSummaries] = useState([]);
    
    const pushProduct = function(product) {
        const newProductSummaries = [...productSummaries];
        newProductSummaries.push(product);
        setProductSummaries(newProductSummaries);
    }

    const removeProduct = function(product) {
        const newProductSummaries = [...productSummaries];
        const index = newProductSummaries.indexOf(product);
        newProductSummaries.splice(index, 1);
        setProductSummaries(newProductSummaries);
    }

    const incrementProduct = function(product) {
        const newProductSummaries = [...productSummaries];
        const index = newProductSummaries.indexOf(product);
        newProductSummaries[index].quantity++;
        setProductSummaries(newProductSummaries);
    }

    const decrementProduct = function(product) {
        const newProductSummaries = [...productSummaries];
        const index = newProductSummaries.indexOf(product);
        if (newProductSummaries[index].quantity > 1) {
            newProductSummaries[index].quantity--;
            setProductSummaries(newProductSummaries);
        }
    }

    const sum = productSummaries.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div className="cennik__wrapper container">
            <h1>Cennik</h1>
            <div className="cennik__content">
                <div className='cennik__products'>
                    <h2 className='cennik__kalk__title'>Aktualna ponuka palivoveho dreva</h2>
                    <p>
                        Uvedené ceny sú s DPH a platia pre jeden, voľne uložený priestorový meter. 
                    </p>
                    {productData.map((product, index) => {
                        return <ProductCard key={index} product={product} pushProduct={pushProduct}/>
                        
                    })}
                    <hr />
                    <Text >
                    Doprava

v rámci okresu Stará Ľubovňa: 0,65€
mimo okresu Stará Ľubovňa: dohodou
                    </Text>
                </div>
                <div className='cennik__kalk'>
                    <h2 className='cennik__kalk__title'>Kalkulačka</h2>
                    <p>
                        Vyuzite nasu orientacnu kalkulacku a zistite cenu vasho tepla. 
                    </p>
                    <p>
                        V prípade odberu väčšieho množstva Vám vieme poskytnúť zaujímavé zľavy, preto nas nevahajte <a href="/contact" >kontaktovat</a>. 
                    </p>
                    <ul className='cennik__products-list'>
                        {productSummaries.map((product, index) => {
                            return <li className="product__card" key={index}>
                                <div>
                                    <span>{product.name}</span>
                                    <br/>
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
                    {productSummaries.length > 0 && <Form />}
                    
                </div>
            </div>
        </div>
    )
}

export default Cennik