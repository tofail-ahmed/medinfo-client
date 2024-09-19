import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './banner.css';
import { GrChapterNext, GrChapterPrevious } from 'react-icons/gr';
import { useSelector } from 'react-redux';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const darkMode = useSelector((state) => state.theme.darkMode);


    // Function to detect background color based on theme
    const updateBorderColor = () => {
      const root = document.documentElement;
  
      // Set the border color based on the theme
      root.style.setProperty(
        '--thumb-active-border-color',
        darkMode === true ? '#ffffff' : '#000000'
      );
    };
  
    useEffect(() => {
      updateBorderColor();
    }, [darkMode]); // Update the border color whenever the theme changes

  return (
    <div className="flex flex-col items-center relative">
   

      {/* Main Swiper */}
      <div className="relative lg:w-[100%] w-[500px]">
        <Swiper
          className="lg:w-full lg:h-[450px] w-full h-[200px]"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: '.custom-next-btn',
            prevEl: '.custom-prev-btn',
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, Autoplay]}
        >
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner1.png" alt="Banner 1" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner2.png" alt="Banner 2" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner3.png" alt="Banner 3" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner4.png" alt="Banner 4" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner5.png" alt="Banner 5" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src="/src/assets/banner/banner6.png" alt="Banner 6" /></SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600/50 text-green-300 font-bold p-2 rounded-full z-10 mx-4">
        <GrChapterPrevious />

        </button>
        <button className="custom-next-btn absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600/50 text-green-300 font-bold p-2 rounded-full z-10 mx-4">
        <GrChapterNext />
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
