import './ServicesBlock.css'
import {slides} from '../data/slider'
import Button from './button';
import { HashLink } from 'react-router-hash-link';
import Image from './parts/Image';

const ServicesBlock = () => {
    return (
        <div className="services-block">
            <div className="container">
                <ul className="services-block__wrapper">
                    {slides.map((service, index) => (
                        < HashLink className='services__card' key={index} href={service.buttonLink} to={service.buttonLink} smooth={true}>
                            <div className='service__card-image'>
                                <Image src={service.image} alt={service.title} />
                            </div>
                            <div className='services__card-content'>
                                <span className='services__title'>{service.title}</span>
                                {/*}
                                <p className='services__text'>
                                    {service.text}
                                </p>
                                */}
                                <span className='services__bottom' > Viac info</span>
                            </div>
                        </HashLink>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServicesBlock;