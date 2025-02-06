import React from "react";
import { GiHealthCapsule } from "react-icons/gi";
import { useNavigate } from "react-router";
import { GiHypodermicTest } from "react-icons/gi";
import { FaFilePrescription } from "react-icons/fa6";
import { FaHeadSideCough } from "react-icons/fa6";




const AdvancedServices = () => {
      const navigate=useNavigate()
      const handleCovid=()=>{
            navigate("/covid")
      }
      const handleTest=()=>{
            navigate("/flutest")
      }
      const handlePrescriptions=()=>{
            navigate("/prescription")
      }
      const handleCoughCold=()=>{
            navigate("/flucoughcold")
      }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-around items-center my-8 gap-4">
      <button onClick={handleCovid} className=" mx-auto lg:w-[300px] w-[200px]  shadow-md  bg-slate-300 rounded-md p-4">
        <span className="flex justify-center items-center gap-2 ">
          <span className="text-3xl bg-slate-400 hover:bg-slate-500 hover:text-slate-200 rounded-[100%] p-2">
            <GiHealthCapsule />
          </span>{" "}
         <span className="hover:text-blue-500 font-bold "> Get COVID-19 & flu vaccines</span>
        </span>
      </button>
      <button onClick={handleTest} className=" mx-auto lg:w-[300px] w-[200px]   shadow-md  bg-slate-300 rounded-md p-4">
        <span className="flex justify-center items-center gap-2 ">
          <span className="text-3xl bg-slate-400 hover:bg-slate-500 hover:text-slate-200 rounded-[100%] p-2">
            <GiHypodermicTest />
          </span>{" "}
         <span className="hover:text-blue-500 font-bold "> Test for flu & COVID-19</span>
        </span>
      </button>
      <button onClick={handlePrescriptions} className=" mx-auto lg:w-[300px] w-[200px] shadow-md bg-slate-300 rounded-md p-4">
        <span className="flex justify-center items-center gap-2 ">
          <span className="text-3xl bg-slate-400 hover:bg-slate-500 hover:text-slate-200 rounded-[100%] p-2">
            <FaFilePrescription />
          </span>{" "}
         <span className="hover:text-blue-500 font-bold "> Manage Prescriptions</span>
        </span>
      </button>
      <button onClick={handleCoughCold} className=" mx-auto lg:w-[300px] w-[200px]  shadow-md bg-slate-300 rounded-md p-4">
        <span className="flex justify-center items-center gap-2 ">
          <span className="text-3xl bg-slate-400 hover:bg-slate-500 hover:text-slate-200 rounded-[100%] p-2">
            <FaHeadSideCough />
          </span>{" "}
         <span className="hover:text-blue-500 font-bold "> Shop Cough, cold & flu</span>
        </span>
      </button>
    </div>
  );
};

export default AdvancedServices;
