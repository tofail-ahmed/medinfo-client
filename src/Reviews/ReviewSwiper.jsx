import React, { useState ,useEffect} from 'react';
import './ReviewSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useAllUserQuery } from '../redux/user/usersApi';
import { IoMdMail } from "react-icons/io";
import { useMediaQuery } from '@mui/material';


const ReviewSwiper = () => {
      const { data, isLoading } = useAllUserQuery();
      const allUser = data?.data;


      const [heightSet, setHeightSrt] = useState();
      const [fontSize, setFontSize] = useState();
      const [imgWidth, setImgWidth] = useState();
      const [imgHeight, setImgHeight] = useState();
    
      
    
      const isLargeScreen = useMediaQuery("(min-width:1200px)");
      const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");
    
      useEffect(() => {
        if (isLargeScreen) {
          setHeightSrt("600px");
          setImgWidth("100px");
          setImgHeight("100px");
          setFontSize("15px");
        } else if (isMediumScreen) {
          setHeightSrt("400px");
          setImgWidth("80px");
          setImgHeight("80px");
          setFontSize("14px");
        } else {
          setHeightSrt("300px");
          setImgWidth("50px");
          setImgHeight("50px");
          setFontSize("12px");
        }
      }, [isLargeScreen, isMediumScreen]);
  

  // Function to generate a random RGB color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256); // Red: 0-255
    const g = Math.floor(Math.random() * 256); // Green: 0-255
    const b = Math.floor(Math.random() * 256); // Blue: 0-255
    return { r, g, b, rgb: `rgb(${r}, ${g}, ${b})` }; // Return the RGB color object
  };

  // Function to calculate brightness
  const getBrightness = ({ r, g, b }) => {
    // Formula for perceived brightness: (0.299 * R) + (0.587 * G) + (0.114 * B)
    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }


  
  return (
    <div className="review-swiper">
      <h1 className="p-10 text-3xl text-center mx-auto font-bold" style={{ color: '#333' }}>
        Review Swiper
      </h1>
      <Swiper
        className="border-2 border-red-300 mySwiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {allUser?.map((user, index) => {
          const bgColor = getRandomColor(); // Random background color
          const brightness = getBrightness(bgColor); // Calculate brightness
          const textColor = brightness > 128 ? 'black' : 'white'; // Set text color based on brightness

          return (
            <SwiperSlide
              key={index}
              className="w-[200px] h-[200px] flex items-center justify-center p-4 rounded-lg"
              style={{ backgroundColor: bgColor.rgb }}
            >
              <div className="text-center rounded-xl p-2" style={{ color: textColor }}>
              <img
                    className="absolute left-0 top-0 rounded-md"
                    src={user.imgUrl}
                    alt=""
                    style={{
                      width: imgWidth,
                      height: imgHeight,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
                    }}
                  />
                <p className="mb-2 font-bold text-xs lg:text-md mt-[30%]">{user?.review || "No Review Provided"}</p>
                <div className='flex flex-col justify-end items-end absolute bottom-0 right-2'>
                <p className="text-sm font-bold">-{user?.name || "Anonymous User"}</p>
                <p className="flex justify-center items-center gap-2 text-sm"><IoMdMail/>{user?.email || "Anonymous User"}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
