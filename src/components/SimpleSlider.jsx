import React, { Children } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import { slides } from '../data/slider';



function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {slides.map((slide, index) => (
        <div>
          <div className='grid' key={index} style={{backgroundImage: `url(${slide.image})`}}>
            <div className='grid__item'></div>
            <div className='grid__item grid__item--center'>
              <div className='grid__item-left'>
                  <div className='grid__item--inner__content'>
                      <h1>{slide.title}</h1>
                      <p>{slide.text}</p>
                  </div>
              </div>
            <div className='grid__item-right'></div>
          </div>
          <div className='grid__item'></div>
        </div>
      </div>
                ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
