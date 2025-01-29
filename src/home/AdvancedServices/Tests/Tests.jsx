import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { FaVirusCovidSlash } from "react-icons/fa6";
import TestsTable from "./TestsTable";

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
          <img
            className="w-[100%] h-[100%]  border-slate-200 border-s-2 border-e-2 rounded-e-md"
            src="/public/assets/flu_test.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-center text-md text-black font-bold my-2">
        Unisured patients and veterans who meet eligibiility criteria may
        qualify for no-cost testing>*
      </h1>
      <div class="flex items-center text-center">
        <hr class="flex-grow border-none h-[4px] bg-green-300" />
        <span class="mx-3 lg:text-3xl text-lg font-bold text-red-600">
          <FaVirusCovidSlash />
        </span>
        <hr class="flex-grow border-none h-[4px] bg-green-300" />
      </div>
      <div>
        <h1 className="text-center my-4 lg:text-4xl text-lg">Testing services and at-home tests</h1>
        <h1 className="text-center my-1 mb-4 text-lg font-bold">You may use your available and eligible funds for treatments and tests </h1>
      </div>
      <TestsTable></TestsTable>
    </div>
  );
};

export default Tests;
