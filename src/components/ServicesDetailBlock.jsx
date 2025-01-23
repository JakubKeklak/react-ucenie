import React from 'react';
import './ServicesDetailBlock.css';
import Heading from './typography/Heading';
import Text from './text'
import { motion } from "motion/react"

const ServicesDetailBlock = ({ id, index, title, text, buttons, gallery, name }) => {

    return (
        <section className="services-detail-block" id={id} name={name}>
            <div className="services-detail-block__wrapper container" >
                <div className="services-detail-block__content">
                    <div className="services-detail-block__title">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '50%' }}
                            transition={{ duration: .5, delay: .5 }}
                            className="services-detail-block__title-row">
                        </motion.div>
                        <Heading tag="h2">
                            {title}
                        </Heading>
                    </div>
                    <div className="services-detail-block__text">
                        <Text>{text}</Text>
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