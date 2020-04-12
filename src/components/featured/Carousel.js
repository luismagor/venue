// @flow
import React from 'react';
import Slider from 'react-slick';

import slideOne from '../../resources/images/slide_one.jpg';
import slideTwo from '../../resources/images/slide_two.jpg';
import slideThree from '../../resources/images/slide_three.jpg';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slideOne})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slideTwo})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slideThree})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
