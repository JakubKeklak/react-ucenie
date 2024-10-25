import React from 'react';
import './ServicesDetailBlock.css';
import Heading from './typography/Heading';

const ServicesDetailBlock = ({ id, title, text, buttons, gallery }) => {

    return (
        <section className="services-detail-block" id={id}>
            <div className="services-detail-block__wrapper container" >
                <div className="services-detail-block__content">
                    <div className="services-detail-block__title">
                        <Heading tag="h1">
                            {title}
                        </Heading>
                    </div>
                    <div className="services-detail-block__text">
                        {text}
                    </div>
                    <div className="services-detail-block__buttons">
                        {buttons}
                    </div>
                </div>
                <div className="services-detail-block__gallery">
                    {gallery}
                </div>
            </div>
            <div className="services-detail-block__divider"></div>
        </section>
    );
};

export default ServicesDetailBlock;