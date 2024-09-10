
import { useNavigate } from "react-router";
import { useAllMedicinesQuery } from "../redux/medicine/medicinesApi";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Search from "../search/Search";

const Home = () => {
  // const userCred=useSelector((state)=>state.medInfoUser.medInfoUserCred);

  const navigate = useNavigate();
  const { data, isLoading } = useAllMedicinesQuery("");
  if (isLoading) {
    return <Loader/>;
  }
  // console.log(userCred)
  // console.log(data?.data)
  return (
    <div className="">
      <div>
        <Search></Search>
      </div>
      <div className="mx-10 ">
        <ul>
          {data?.data.map((medicine, index) => (
            <div className="bg-slate-400/30 rounded-md my-4 px-10 py-2" key={index}>
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
              <p className="text-sm">
                <span className="text-fuchsia-800 font-semibold">Total Sold:</span>{" "}
                {medicine.sold}
              </p>
              <p className="text-sm">
                <span className="text-fuchsia-800 font-semibold">Available:</span>{" "}
                {medicine.available}
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
              <button
                className="border-2 rounded-md border-red-300"
                onClick={() => navigate(`/medicine/${medicine._id}`)}
              >
                Details
              </button>

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

export default Home;
