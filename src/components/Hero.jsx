import './Hero.css'
import { useState, useEffect, useRef } from 'react'
import Button from './button'
import Image from './parts/Image'
import { Link } from 'react-scroll';
import { IoIosArrowDown } from "react-icons/io";
import { GrPlayFill, GrStopFill } from "react-icons/gr";

const Hero = ({ buttonVariant, icon, image, text, buttonUrl, title, video, scrollButton }) => {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    return (
        <div className={`hero  `}>
            <div className="hero__card">
                <div className='hero__card-wrapper'>
                    {play === false ?
                        (
                            <div className="hero__card-image">
                                <Image src={image} alt="" />
                            </div>
                        )
                        :
                        (
                            <div className="hero__card-image ">
                                <video poster="https://images.pexels.com/photos/1136466/pexels-photo-1136466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" autoPlay muted loop src={video} ref={videoRef} />
                            </div>
                        )
                    }
                    <div className='hero__card-content container'>
                        <div className='hero__content'>

                            <h2 className='hero__content-title'>
                                {title}
                            </h2>
                            <p className='hero__content-text'>
                                {text}
                            </p>
                            <div className='hero__content-buttons'>
                                {buttonUrl &&
                                    <Button text='Viac informacii' url={buttonUrl} variant={buttonVariant} icon={true} />
                                }
                                <div className="play-button" onClick={() => setPlay(!play)}>
                                    <span className='play-icon'>{play === false ? <GrPlayFill /> : <GrStopFill />}</span>
                                    {/*<span className='play-text'>{play === false ? "Pozriet video" : "Zastavit video"}</span>*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {scrollButton &&
                    <Link className="hero__scroll-down" to="servicesBlock" activeClass="menuItem--active-services" spy={true} offset={window.innerWidth <= 600 ? -50 : -60} smooth={true} duration={1500}>
                        <IoIosArrowDown />
                    </Link>
                }
            </div>
        </div>
    );
}

export default Hero;