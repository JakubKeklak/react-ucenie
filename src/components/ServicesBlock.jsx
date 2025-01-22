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
        <section className={`services-block ${inView ? 'services-block--inView' : ''} `} ref={ref} >
            <div className="container services-block__wrapper">
                <ul className="services-block__list">
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
                            <li>
                                <HashLink className='services__card' key={index} href={service.buttonLink} to={service.buttonLink} smooth={true}  >
                                    <span className='services__icon'>{Tag && <Tag />}</span>
                                    <span className='services__title' style={{ transitionDelay: index * 0.2 + 's' }} >{service.title}</span>
                                    <div className='services__card-svg'>
                                        <svg viewBox="-2 -2 104 104" xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="30 0, 70 0, 100 30, 100 70, 70 100, 30 100, 0 70, 0 30"
                                            />
                                        </svg>
                                    </div>
                                </HashLink>
                            </li>
                        );
                    })}
                </ul>
                <div className='services-block__button'>
                    <Button variant='primary' url='/services' text='Prehľad služieb' icon="FaAngleRight"/>
                    <Button variant='primary' url='/contact' text='Kontaktujte nás' icon="Mail" />
                </div>
            </div>
        </section>
    );
}

export default ServicesBlock;
