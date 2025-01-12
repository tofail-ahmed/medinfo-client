import React from 'react'
import { useGetAssetsQuery } from "../../redux/user/usersApi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { data, isLoading } = useGetAssetsQuery();
  // console.log(data?.data[6])
  const logo = data?.data.find((item) => item.name === "logo");
  console.log(logo);
  return (
    <div className="bg-green-500 text-green-100">
      <div className="w-[80%] mx-auto">
        <div className='flex justify-between items-center'>
          <div className="flex  items-center">
            <NavLink to={"/"}>
              <img
                className="lg:w-[100px] w-[50px]"
                src={logo.imgUrl}
                alt="Logo"
              />
            </NavLink>
            <h1 className="text-5xl font-extrabold">MedInfo</h1>
          </div>
          <div className='w-[50%]'>
          <span className='text-xl font-medium'>COST PLUS DRUGS™</span> offers hundreds of common (and often life-saving) medications at the lowest possible prices.</div>
        </div>
        <hr className='text-3xl font-extrabold py-6'/>
        <hr className='text-3xl font-extrabold py-6'/>
      </div>
      <hr className='text-3xl w-full font-extrabold py-6'/>

    </div>
  );
};

export default Footer