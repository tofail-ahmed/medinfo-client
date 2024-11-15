import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './banner.css';
import { GrChapterNext, GrChapterPrevious } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useGetAssetsQuery } from '../redux/user/usersApi';

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const darkMode = useSelector((state) => state.theme.darkMode);


  const {data,isLaoding}=useGetAssetsQuery();
  // console.log(data?.data);
  const banner1=data?.data.find(item => item.name === 'banner1')
  const banner2=data?.data.find(item => item.name === 'banner2')
  const banner3=data?.data.find(item => item.name === 'banner3')
  const banner4=data?.data.find(item => item.name === 'banner4')
  const banner5=data?.data.find(item => item.name === 'banner5')
  const banner6=data?.data.find(item => item.name === 'banner6')
  // console.log(logo)

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
          <SwiperSlide><img className="w-full h-full" src={banner1.imgUrl} alt="Banner 1" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src={banner2.imgUrl} alt="Banner 2" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src={banner3.imgUrl} alt="Banner 3" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src={banner4.imgUrl} alt="Banner 4" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src={banner5.imgUrl} alt="Banner 5" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full" src={banner6.imgUrl} alt="Banner 6" /></SwiperSlide>
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
            <img className="w-full h-full object-cover" src={banner1.imgUrl} alt="Thumb 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={banner2.imgUrl} alt="Thumb 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={banner3.imgUrl} alt="Thumb 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={banner4.imgUrl} alt="Thumb 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={banner5.imgUrl} alt="Thumb 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={banner6.imgUrl} alt="Thumb 6" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
