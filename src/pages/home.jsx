import React from 'react';
import './home.css';
import Text from '../components/text';
import { slides } from '../data/slider';
import AnimatedHero from '../components/AnimatedHero';
import { blogs } from '../data/blogs';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import ColoredWrapper from '../components/coloredWrapper';
import Gallery from '../components/gallery'; 

const Home = () => {

    return (
        <div className="hero-container" >
            <AnimatedHero data={slides} />
            <ColoredWrapper>
                <div className="container">
                    <h2>Naše služby</h2>
                    <Text>
                        Drevo ako palivo vo všetkých svojich formách, je prírodný zdroj energie. 
                        Pri jeho správnom spaľovaní a pri správnej vlhkosti horí drevo takmer bez dymu, ľahko sa zapaľuje a 
                        tvorí málo popola. Následne drevný popol sa výborne hodí ako prírodné hnojivo. Najdlhšie oheň udržiava 
                        tvrdé drevo, najľahšiu zápalnosť má mäkké drevo, z ktorého sa vyrábajú aj podpaľovacie triesky. 
                        <br /> <br />
                        V súčasnosti, keď sa ekologické alternatívy stávajú čoraz dôležitejšími, vidíme nárast záujmu o 
                        obnoviteľné zdroje energie, ako je drevo, a zároveň o inovácie v iných oblastiach, vrátane online zábavy. 
                        Nové trendy sa objavujú nielen v ekologických riešeniach, ale aj v digitálnom svete. Hráči na Slovensku čoraz 
                        častejšie hľadajú nove online casino Slovensko, ktoré ponúkajú inovatívne herné zážitky, bonusy a bezpečné platformy. 
                        Moderné kasína tak využívajú nové technológie a zároveň sa orientujú na udržateľnosť v oblasti prevádzky a digitálnej
                        zábavy.
                    </Text>
                </div>
            </ColoredWrapper>
            <ColoredWrapper color='gray'>
                <Gallery variant="row" data={slides} />
            </ColoredWrapper>
            <ColoredWrapper>
                <div className="container">
                    <BlogWrapper
                        title="Zaujimavosti"
                        buttonText="Všetky články"
                        buttonUrl="/blog"
                    >
                        {blogs.slice(0, 4).map((blog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))}
                    </BlogWrapper>
                </div>
            </ColoredWrapper>
        </div>
    );
};

export default Home;