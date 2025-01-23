import React from 'react';
import './SmallHero.css';
import Heading from './typography/Heading';
import Text from './text';

const SmallHero = ({ title, text, bgText }) => {
    return (
        <section className="small-hero">
            <div className="container small-hero__wrapper">
                <div className="small-hero__bg">{bgText}</div>
                <div className="small-hero__heading">
                    <Heading>
                        {title}
                    </Heading>
                </div>
                <div className="small-hero__text">
                    <Text size="big">
                        {text}
                    </Text>
                </div>
            </div>
        </section>
    );
}

export default SmallHero;