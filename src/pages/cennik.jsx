import './cennik.css'
import { productData } from '../data/productData'
import ProductCard from '../components/productCard'
import Text from '../components/text'
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

    const updateQuantity = (id, newQuantity) => {
        setProductSummaries(productSummaries.map(product =>
          product.id === id ? { ...product, quantity: newQuantity } : product
        ));
      };

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
                    <p>
                        {productSummaries.map((product, index) => {
                            return <div key={index}>{product.name} - {product.price}€ <span onClick={() => removeProduct(product)}>Odobrat</span>
                            <input
            type="number"
            value={product.quantity}
            onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
            min="1"
          />
                            </div> 
                        }
                        )}
                        
                        <input type="text"  value={productSummaries.reduce((acc, product) => acc + product.price * product.quantity, 0)}></input><span>€</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cennik