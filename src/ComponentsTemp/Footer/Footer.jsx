import React from 'react'
import { useGetAssetsQuery } from "../../redux/user/usersApi";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";






const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const { data, isLoading } = useGetAssetsQuery();
  // console.log(data?.data[6])
  const logo = data?.data.find((item) => item.name === "logo");
  console.log(logo);
  return (
    <div  className={`${darkMode ? "bg-green-900 text-white" : "bg-green-500 text-red-900 "} py-12`}>
      <div className="w-[80%] mx-auto">
        <div className='flex justify-between items-center'>
          <div className="flex  items-center">
            <NavLink to={"/"}>
              <img
                className="lg:w-[100px] w-[50px]"
                src={logo?.imgUrl}
                alt="Logo"
              />
            </NavLink>
            <h1 className="text-5xl font-extrabold">MedInfo</h1>
          </div>
          <div className='w-[50%]'>
          <span className='text-xl font-medium'>COST PLUS DRUGS™</span> offers hundreds of common (and often life-saving) medications at the lowest possible prices.</div>
        </div>
       
        
      <hr className='text-3xl   font-extrabold py-6 mt-6'/>
      <div className='grid lg:grid-cols-2 grid-cols-1 '>
      <div>
        <h1 className="py-2">Saty up to date</h1>
        <h3 className="py-2">Subscribe to our newsletter to receive special offers, notifications of new products, and company updates.</h3>
       <div>
       <input className="rounded-s-lg text-md p-1 py-2" type="email" />
       <button className="bg-green-950 p-1 py-2 rounded-e-lg hover:bg-green-800 duration-300">Submit</button>
       </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
       <h1>Browse Medications</h1>
       <h1>CA Policy</h1>
       <h1>Service of Policy</h1>
       <h1>HIPAA Policy</h1>
       <h1>Terms of Services</h1>
       <h1>Contact Doctors</h1>
       <h1>Privacy Policy</h1>
       <h1>For Providers </h1>
       <h1>FAQs </h1>
       <h1>Contact US </h1>
      </div>
      </div>
      <hr className='text-3xl   font-extrabold py-6 mt-6'/>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
<div className="grid grid-cols-5 ">
  <span className="text-4xl lg:text-5xl"><FaXTwitter  /></span>
  <span className="text-4xl lg:text-5xl"><FiLinkedin/></span>
  <span className="text-4xl lg:text-5xl"><LuYoutube/></span>
  <span className="text-4xl lg:text-5xl"><FiFacebook/></span>
  <span className="text-4xl lg:text-5xl"><FaInstagram/></span>

</div>
<div>
  <h1 className="text-center">
  © 2025 Mark BD Cost Plus Drug Company, PBC. All rights reserved.
  </h1>
</div>
</div>
      </div>

    </div>
  );
};

export default Footer