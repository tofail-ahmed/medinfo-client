import React from "react";
import vaccine_img from "../../../../public/assets/vaccine_nurse.png";
import logo from "../../../../public/assets/medinfo.png";
import { GiLoveInjection } from "react-icons/gi";

const Covid = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center my-20 text-red-700 font-extrabold">
        This is covid emergency service page{" "}
      </h1>
      <div className=" bg-green-600  rounded-t-md flex justify-around items-center w-[70%]  mx-auto lg:h-[150px] h-[100px]">
        <h1 className=" text-white lg:text-3xl text-xl font-extrabold w-[50%]">
          Schedule Vaccination Appointments
        </h1>
        <span>
          <img
            className="w-[200px] lg:h-[150px] h-[100px] "
            src={vaccine_img}
            alt=""
          />
        </span>
      </div>
      <span className="flex justify-center items-center gap-[4px]">
            <span className="text-2xl font-bold " >
<GiLoveInjection/>
            </span>
            <button className="text-lg hover:text-blue-600 font-bold hover:underline">
            Get vaccination information, including records and appointments
            </button>
      </span>
      <div className=" bg-slate-100  my-12 rounded-t-md flex justify-around items-center w-[60%]  mx-auto lg:h-[150px] h-[100px]">
        
        <span>
          <img
            className="w-[200px] lg:h-[150px] h-[100px] "
            src={logo}
            alt=""
          />
        </span>
        <h1 className=" text-slate-900 lg:text-lg text-sm font-bold w-[60%]">
        Get your flu shot or any vaccine and get a coupon for 20% off your next purchase of $20 or more up to $100 as a myWalgreens member2
        </h1>
      </div>
    </div>
  );
};

export default Covid;
