
import { NavLink } from "react-router-dom";
import { useAllMedicinesQuery } from "../redux/medicine/medicinesApi";

const Dashboard = () => {
  const { data, isLoading } = useAllMedicinesQuery("");
  if (isLoading) {
    return <div className="text-3xl text-center">Loading....</div>;
  }
  return (
    <div className="mx-10">
      <h1>This is Dashboard Home</h1>
      <div>
        <ul>
          {data.data.map((medicine, index) => (
            <div className="bg-slate-400/30 rounded-md my-4 px-10 " key={index}>
              <li className="text-2xl">
                {index + 1}. {medicine.medicine_name}
              </li>
              <li className="text-sm">
                <span className="text-fuchsia-800 font-semibold">Genric:</span>{" "}
                {medicine.generic_name}
              </li>
              <p className="text-sm">
                <span className="text-fuchsia-800 font-semibold">
                  Descriptions:
                </span>{" "}
                {medicine.description}
              </p>
              <p className="text-sm">
                <span className="text-fuchsia-800 font-semibold">Actions:</span>{" "}
                {medicine.actions}
              </p>
              <div className="flex gap-4">
                <h1>Alternative Medicines</h1>
                <div>
                  {medicine.alt_medicines.map((m, i) => (
                    <li className="text-lg" key={i}>
                      {i + 1}. {m}
                    </li>
                  ))}
                </div>
              </div>
              <NavLink
                className="border-2 rounded-md border-red-300 bg-orange-300"
                to={`/buyMedicine/${medicine._id}`}
              >
                Buy Now
              </NavLink>
            </div>
          ))}
           
        </ul>
      </div>
    
    </div>
  );
};

export default Dashboard