import React, { useState, useEffect } from 'react';
import './ReviewSwiper.css';

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
    </div>
  );
};

export default ReviewSwiper;
