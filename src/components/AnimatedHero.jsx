import './AnimatedHero.css'
import { useState, useEffect, useRef } from 'react'
import Button from './button'
import Image from './parts/Image'

const AnimatedHero = ({ data, buttonVariant, icon, size, image, text, buttonUrl, title, video }) => {
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
        }, 9000);
    }

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
    }, [data.length]);

    const heroSize = size ? 'animated-hero--small' : 'animated-hero--large';
    return (
        <div className={`animated-hero ${heroSize} `}>
                    <div  className="animated-hero__card">
                        <div className='animated-hero__card-wrapper'>
                        {/*data.slice(0, 2).map((slide, index) => {
                            return (
                            <div key={index} className={`animated-hero__card-image ${activeIndex === index ? 'animated-hero__card-image--active' : ''}`}>
                                <img  src={slide.image} alt="" />
                            </div>
                             );
                            })
                             */}
                             
            {video ? (
                <video className="animated-hero__card-image" autoPlay muted loop src={video} />
            ) : (
                <div className="animated-hero__card-image">
                    <Image src={image} alt="" />
                </div>
            )}
                            
                            <div className='animated-hero__card-content container'>
                                <div className='animated-hero__content'>
                                    <h2 className='animated-hero__content-title'>
                                        {title}
                                    </h2>
                                    <p className='animated-hero__content-text'>
                                        {text}
                                    </p>
                                    {buttonUrl &&
                                        <Button text='Viac informacii' url={buttonUrl} variant={buttonVariant} icon={icon} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
           { /*
            <div className='animated-hero__dots'>
                {data.map((_, index) => {
                    return (
                        <div key={index} className={`animated-hero__dot ${activeIndex === index ? 'animated-hero__dot--active' : ''}`} onClick={() => handleActiveIndex(index)}></div>
                    );
                })}
            </div>
            */}
        </div>
    );
}

export default AnimatedHero;