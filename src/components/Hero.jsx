import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

import Button from './button';

const Hero = ({data, buttonVariant, icon}) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setHoveredIndex(prevIndex => (prevIndex + 1) % data.length);
            }, 5000);
        };

        startInterval();

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleMouseEnter = (index) => {
        clearInterval(intervalRef.current);
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(prevIndex => (prevIndex + 1) % data.length);
        intervalRef.current = setInterval(() => {
            setHoveredIndex(prevIndex => (prevIndex + 1) % data.length);
        }, 8000);
    };

    return (
        <div className='hero'>
            <div className="hero__content">
                {data.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={`hero__card ${hoveredIndex === index ? 'hero__card--active' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="hero__card-content" style={{ backgroundColor: `rgba(${slide.color})` }}>
                                <h2 className="hero__content-title">{slide.title}</h2>
                                <p className="hero__content-text">{slide.text}</p>
                                <Button text="Viac informacii" url={slide.buttonLink} variant={buttonVariant} icon={icon}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Hero;