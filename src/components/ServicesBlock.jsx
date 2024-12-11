import './ServicesBlock.css'
import { slides } from '../data/slider'
import Button from './button';
import { HashLink } from 'react-router-hash-link';
import Image from './parts/Image';
import { GiWoodPile, GiFarmTractor, GiTowTruck } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
const ServicesBlock = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
        delay: 500,
        triggerOnce: true,
      });
    return (
        <div className={`services-block ${inView ? 'services-block--inView' : ''} `} name="servicesBlock" ref={ref}>
            <div className="container">
                <ul className="services-block__wrapper">
                    {slides.map((service, index) => {
                        const Tag = (() => {
                            if (service.icon === 'GiWoodPile') {
                                return GiWoodPile;
                            } else if (service.icon === 'GiFarmTractor') {
                                return GiFarmTractor;
                            } else if (service.icon === 'GiTowTruck') {
                                return GiTowTruck;
                            } else if (service.icon === 'PiFarm') {
                                return PiFarm;
                            }
                        })();
                        return (
                            <HashLink className='services__card' key={index} href={service.buttonLink} to={service.buttonLink} smooth={true} style={{ '--loop': index }}>
                                
                                <span className='services__icon'>{Tag && <Tag />}</span>
                                <span className='services__title'>{service.title}</span>

                                {/*}
                                <p className='services__text'>
                                    {service.text}
                                </p>
                                <span className='services__bottom' > Viac info</span>
                                */}
                                <div className='services__card-svg'>
                                    <svg viewBox="-2 -2 104 104" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="30 0, 70 0, 100 30, 100 70, 70 100, 30 100, 0 70, 0 30"
                                        />
                                    </svg>
                                </div>
                            </HashLink>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ServicesBlock;
