import React, { useState, useEffect,useRef} from 'react';
import './ReviewSwiper.css';
// mport React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ReviewSwiper = () => {

      // Use useState to store the random color
  const [randomColor, setRandomColor] = useState('');


  // Function to generate a random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Red: 0-255
    const g = Math.floor(Math.random() * 256); // Green: 0-255
    const b = Math.floor(Math.random() * 256); // Blue: 0-255

    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color as a string
  }

  

  // Set random color on component mount
  useEffect(() => {
    const newColor = getRandomColor();
    setRandomColor(newColor);
  }, []);

  // console.log("randomColor", randomColor); // Check the generated color










  return (
    <div>
      {/* Apply the random color as a background color inline */}
      <h1 className="p-10 text-3xl text-center mx-auto font-bold" style={{ color: randomColor }}>
        Review Swiper
      </h1>
      <>
      <Swiper
      className="border-2 border-red-300 bg-green-300 mySwiper"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        // className=""
      >
        <SwiperSlide >
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
};

export default ReviewSwiper;
