import React, {createContext} from "react"
import { useState } from "react";
import { productData } from '../data/productData'

export const ProductContext = createContext(null);

const ProductContextProvider = (props)=>{

    const [productSummaries, setProductSummaries] = useState([]);

    const pushProduct = function( product) {
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

    const [showCalc, setShowCalc] = useState(false);
    const handleShowCalc = () => {
        setShowCalc(!showCalc);
      };
      const closeCalc = () => {
        setShowCalc(false);
      };

    

      const disabledButton = (product) => {
        const exists = productSummaries.some(p => p.id === product.id);
        return exists ? true : false;
    };

    const contextValue = {productData, productSummaries, pushProduct, removeProduct, incrementProduct, decrementProduct, showCalc, handleShowCalc, closeCalc, disabledButton }

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider