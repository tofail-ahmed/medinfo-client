import { Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAllUserQuery } from "../redux/user/usersApi";
import Loader from "../ComponentsTemp/Loader";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import "../Reviews/Review.css";

const carousel = (slider) => {
  const z = 360;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Reviews = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const [heightSet, setHeightSrt] = useState();
  const [fontSize, setFontSize] = useState();
  const [imgWidth, setImgWidth] = useState();
  const [imgHeight, setImgHeight] = useState();

  const { data, isLoading } = useAllUserQuery();
  const allUser = data?.data;

  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");

  useEffect(() => {
    if (isLargeScreen) {
      setHeightSrt("600px");
      setImgWidth("100px");
      setImgHeight("100px");
      setFontSize("16px");
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="my-20">
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#110ACB",
          marginBottom: "30px",
          marginTop: "30px",
          letterSpacing: "1.2px",
        }}
      >
        All Reviews
      </Typography>

      <div className="wrapper my-40">
        <div className="scene">
          <div className="carousel keen-slider heightSet" ref={sliderRef} >
            {allUser?.slice(0, 6).map((user, index) => (
           <div key={index} className={`carousel__cell number-slide${index + 1} heightSet`}>
           <div className="flex flex-col items-center h-full justify-between">
             <img
               className="rounded-full"
               src={user.imgUrl}
               alt=""
               style={{
                width: imgWidth,
                height: imgHeight,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
              }}
             />
             
             {/* Review text takes up remaining space, pushing email and name to bottom */}
             <span
               style={{ fontSize: fontSize }}
               className="text-justify mt-2 flex-grow"
             >
               {user.review}
             </span>
             
             {/* Email and Name section aligned at the bottom */}
             <div
               className="mt-2 flex flex-col absolute right-2 bottom-2 fontSize"
               style={{ fontSize: fontSize }}
             >
               <span className="text-[12px]"> {user.name}</span>
               <span className="text-[10px]"> {user.email}</span>
             </div>
           </div>
         </div>
         
          
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
