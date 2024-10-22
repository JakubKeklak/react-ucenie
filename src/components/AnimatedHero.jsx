import './AnimatedHero.css'
import { useState, useEffect, useRef } from 'react'
import Button from './button'

const AnimatedHero = ({ data, buttonVariant, icon }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const handleActiveIndex = (index) => {
        setActiveIndex(index);
        resetInterval();
    }

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 6000); // 6 seconds
    }

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
    }, [data.length]);

    return (
        <div className='animated-hero'>
            {data.map((slide, index) => {
                return (
                    <div key={index} className={`animated-hero__card ${activeIndex === index ? 'animated-hero__card--active' : ''}`}>
                        <div className="animated-hero__card-image">
                            <img  src={slide.image} alt="" />
                        </div>
                        <div className='animated-hero__card-wrapper'>
                            
                            <div className='animated-hero__card-content'>
                                <div className='animated-hero__content-left'>
                                    <div className="animated-hero__content-left-image">
                                        <img  src={slide.image} alt="" />
                                    </div>
                                    <h2 className='animated-hero__content-title'>{slide.title}</h2>
                                    <Button text='Viac informacii' url={slide.buttonLink} variant={buttonVariant} icon={icon} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                );
            })}
            <div className='animated-hero__dots'>
                {data.map((_, index) => {
                    return (
                        <div key={index} className={`animated-hero__dot ${activeIndex === index ? 'animated-hero__dot--active' : ''}`} onClick={() => handleActiveIndex(index)}></div>
                    );
                })}
            </div>
        </div>
    );
}

export default AnimatedHero;