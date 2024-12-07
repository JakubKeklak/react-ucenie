import './cennik.css'

import { useContext } from 'react'
import { ProductContext } from '../context/dataContext'
import ProductCard from '../components/productCard'
import Text from '../components/text'
import { blogs } from '../data/blogs';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import ColoredWrapper from '../components/coloredWrapper';
import Heading from '../components/typography/Heading';

import React, { useEffect } from 'react';

const Cennik = () => {
    useEffect(() => {
        // Add the header--cennik class to the header
        const header = document.querySelector('.header');
        if (header) {
            header.classList.add('header--secondary');
        }

        // Cleanup function to remove the class when the component unmounts
        return () => {
            if (header) {
                header.classList.remove('header--secondary');
            }
        };
    }, []);

    const {productData, pushProduct, disabledButton } = useContext(ProductContext);
   
    return (
        <>
        <div className="cennik__wrapper container">
            <Heading>Cennik</Heading>
            <div className="cennik__content">
                <div className='cennik__products'>
                    <Heading tag="h2" className='cennik__kalk__title'>Aktualna ponuka palivoveho dreva</Heading>
                    <p>
                        Uvedené ceny sú s DPH a platia pre jeden, voľne uložený priestorový meter (prm). 
                    </p>
                    <div className="cennik__products-list"> 
                    {productData.map((product, index) => {
                        return <ProductCard key={index} product={product} pushProduct={pushProduct} disabled={disabledButton(product)}/>
                        
                    })}
                    </div>
                    <Text >
                        Doprava v rámci okresu Stará Ľubovňa: 0,65€ mimo okresu Stará Ľubovňa: dohodou
                    </Text>
                </div>
            </div>
        </div>
            <ColoredWrapper color="quaternary">
                <div className="container">
                    <BlogWrapper
                                title="Zaujimavosti"
                                buttonText="Všetky články"
                                buttonUrl="/blog"
                            >
                                {blogs.filter(blog => blog.category === 'Drevo').slice(0, 4).map((blog, index) => (
                                    <BlogCard key={index} blog={blog} />
                                ))}
                    </BlogWrapper>
                </div>
            </ColoredWrapper>
        </>
    )
}

export default Cennik