import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Slider from "react-slick";

const TheSlider = ({ title, SlideData, trending }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
  };

  return (
    <div className="container">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">{title}</h2>
      <Slider {...settings} className="flex items-center">
        {SlideData.map((movie, index) => (
          <div key={Math.random()} className="px-2"> 
            <Card movie={movie} index={index + 1} trending={trending} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TheSlider;