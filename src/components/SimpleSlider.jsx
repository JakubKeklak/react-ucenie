import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import { slides } from "../data/slider";
import Hero from "./Hero";


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <Hero
              key={slide.id}
              image={slide.image}
              title={slide.title}
              text={slide.text}
              url={slide.url}
            />
          );
        })}

      </Slider>
    </div>
  );
}

export default AutoPlay;
