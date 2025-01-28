import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const Tests = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center gap-2">
        <span>
          <FiAlertCircle />
        </span>
        <h1>
          {" "}
          <strong>NEW</strong> Veterans may be eligible for no-cost COVID-19 &
          flu testing*
        </h1>
      </div>
      <div className="bg-slate-800  grid grid-cols-2 rounded-md my-4">
  <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col justify-center items-start">
    <h1 className="lg:text-4xl text-2xl font-extrabold text-white">
      Covid-19 and flu <br /> testing & treatment
    </h1>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
    <button className="mt-4 px-4 py-2 bg-white text-black rounded-3xl hover:bg-slate-100">
      Schedule a test
    </button>
    <button className="mt-4 px-4 py-2 bg-white text-black rounded-3xl hover:bg-slate-100">
      Shop at-home test
    </button>
    <button className="mt-4 px-4 py-2 bg-white text-black rounded-3xl hover:bg-slate-100">
     Learn about COVID-19 tretment
    </button>
    </div>
  </div>
  <div className="pe-4">
    <img className="w-[100%] h-[100%]  border-slate-200 border-2 rounded-e-md" src="/public/assets/flu_test.jpg" alt="" />
  </div>
</div>

    </div>
  );
};

export default Tests;
