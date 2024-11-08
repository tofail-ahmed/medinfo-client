import { Box, Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAllUserQuery } from "../redux/user/usersApi";
import Loader from "../ComponentsTemp/Loader";
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { useKeenSlider } from "keen-slider/react"
import "../Reviews/Review.css"



const carousel = (slider) => {
      const z = 300
      function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
      }
      slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
          element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
      })
      slider.on("detailsChanged", rotate)
    }

    

const Reviews = () => {
      const [sliderRef] = useKeenSlider(
            {
              loop: true,
              selector: ".carousel__cell",
              renderMode: "custom",
              mode: "free-snap",
            },
            [carousel]
          )

      const [heightSet, setHeightSrt] = useState(); // Initial count for large screens
      const [fontSize, setFontSize] = useState(); // Initial count for large screens
      const [imgWidth,setImgWidth ] = useState(); // Initial count for large screens
      const [imgHeight,setImgHeight ] = useState(); // Initial count for large screens



  const { data, isLoading } = useAllUserQuery();
  const allUser = data?.data;
  console.log(allUser&&allUser[0])

  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:900px) and (max-width:1199px)"
  );
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:899px)"
  );

  useEffect(() => {
       
        if (isLargeScreen) setHeightSrt("400px"), setImgWidth("100px"),setImgHeight("100px"),setFontSize("16px");
        else if (isMediumScreen) setHeightSrt("400px"),setImgWidth("80px"),setImgHeight("80px"),setFontSize("14px");
        // else if (isSmallScreen) setDisplayCount(10);
        else setHeightSrt("300px"),setImgWidth("50px"),setImgHeight("50px"),setFontSize("12px"); // Default for extra-small screens
      
    }, [isLargeScreen, isMediumScreen, isSmallScreen]);

  if (isLoading) {
    return <Loader />;
  }




  return (
    <div>
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
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell   number-slide1 ">
            
            <div>
            <img className="w-[50px] h-[50px] rounded-full mx-auto" src={allUser&&allUser[0].imgUrl} alt="" />
            <span>{allUser&&allUser[0].review}</span>
           <div className="flex flex-col justify-end items-end">
           <span>--{allUser&&allUser[0].name}</span>
           <span>--{allUser&&allUser[0].email}</span>
           </div>
            </div>
          </div>
          <div className="carousel__cell lg:w-[350px]  w-[300px] number-slide2">{allUser&&allUser[1].review}</div>
          <div className="carousel__cell lg:w-[350px]  w-[300px] number-slide3">{allUser&&allUser[2].review}</div>
          <div className="carousel__cell lg:w-[350px]  w-[300px] number-slide4">{allUser&&allUser[3].review}</div>
          <div className="carousel__cell lg:w-[350px]  w-[300px] number-slide5">{allUser&&allUser[4].review}</div>
          <div className="carousel__cell lg:w-[350px]  w-[300px] number-slide6">{allUser&&allUser[5].review}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
