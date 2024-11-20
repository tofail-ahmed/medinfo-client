import React, { useState, useEffect } from 'react';
import './ReviewSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useAllUserQuery } from '../redux/user/usersApi';

const ReviewSwiper = () => {
  const { data, isLoading } = useAllUserQuery();
  const allUser = data?.data;

  // Use useState to store the random color
  const [randomColor, setRandomColor] = useState('');

  // Function to generate a random RGB color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256); // Red: 0-255
    const g = Math.floor(Math.random() * 256); // Green: 0-255
    const b = Math.floor(Math.random() * 256); // Blue: 0-255
    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color as a string
  };

  // Set random color on component mount
  useEffect(() => {
    setRandomColor(getRandomColor());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="review-swiper">
      <h1 className="p-10 text-3xl text-center mx-auto font-bold" style={{ color: randomColor }}>
        Review Swiper
      </h1>
      <Swiper
        className="border-2 border-red-300 bg-green-300 mySwiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {allUser?.map((user, index) => (
          <SwiperSlide key={index} className="w-[150px] h-[150px]">
            {/* Replace with user-specific image or content */}
            <span>{user.review}</span>
            <p className="text-center mt-2">{user?.name || "Anonymous User"}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
