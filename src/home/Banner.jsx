import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './banner.css';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="flex flex-col items-center relative">
      <h1 className='text-5xl text-center mb-4'>Banner</h1>

      {/* Main Swiper */}
      <div className="relative lg:w-[100%] w-[500px]">
        <Swiper
          className="lg:w-full lg:h-[450px] w-full h-[200px] border-4 border-gray-300"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          navigation={{
            nextEl: '.custom-next-btn',
            prevEl: '.custom-prev-btn',
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
        >
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner1.png" alt="Banner 1" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner2.png" alt="Banner 2" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner3.png" alt="Banner 3" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner4.png" alt="Banner 4" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner5.png" alt="Banner 5" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner6.png" alt="Banner 6" /></SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 mx-4">
          Prev
        </button>
        <button className="custom-next-btn absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 mx-4">
          Next
        </button>
      </div>

      {/* Thumbnails Swiper */}
      <div className="flex justify-center w-[70%] lg:h-[50px] h-[30px] mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          className="w-[70%]"
        >
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="/src/assets/banner/banner1.png" alt="Thumb 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="/src/assets/banner/banner2.png" alt="Thumb 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="/src/assets/banner/banner3.png" alt="Thumb 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="/src/assets/banner/banner4.png" alt="Thumb 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="/src/assets/banner/banner5.png" alt="Thumb 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="/src/assets/banner/banner6.png" alt="Thumb 6" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
