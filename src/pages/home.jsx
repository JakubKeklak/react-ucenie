import React from 'react';
import './home.css';
import Text from '../components/text';
import { slides } from '../data/slider';
import Hero from '../components/Hero';
import { blogs } from '../data/blogs';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import ColoredWrapper from '../components/coloredWrapper';
import Gallery from '../components/gallery';
import ContentBlock from '../components/ContentBlock';
import FaqsBlock from '../components/FaqsBlock';
import ServicesBlock from '../components/ServicesBlock';
import Video from '../assets/video1.mp4'
const Home = () => {
    return (
        <div className="home" >
            <Hero
                data={slides}
                image="https://freedomfirewood.com/wp-content/uploads/packaged-firewood.jpg"
                title={
                    <>
                        <span>palivové drevo a komplexné služby</span>

                    </>
                }
                text={
                    <>
                        <span>
                            Ponúkame široký výber palivového dreva, ktoré vám zabezpečíme počas celého roka. 
                            K tomu poskytujeme agro a komunálne služby, ako aj dovoz materiálov, čím pokryjeme všetky vaše potreby.
                            <br />
                            Spoľahnite sa na našu odbornú a spoľahlivú pomoc.
                        </span>

                    </>
                }
                video={Video}
                buttonUrl="/services"
                scrollButton={true}
            />
            <div className="home__content" name="servicesBlock">

                <ContentBlock />

                <ServicesBlock />

                <ContentBlock imageRight={true} />

                <FaqsBlock />

                <ContentBlock />

                <Gallery variant="row" data={slides} />

                <ColoredWrapper color="quaternary">
                    <div className="container">
                        <BlogWrapper
                            title="Zaujimavosti"
                            buttonText="Všetky články"
                            buttonUrl="/blog"
                        >
                            {blogs.slice(0, 4).map((blog, index) => (
                                <BlogCard index={index} blog={blog} />
                            ))}
                        </BlogWrapper>
                    </div>
                </ColoredWrapper>
            </div>
        </div>
    );
};

export default Home;