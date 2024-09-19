
import { useNavigate } from "react-router";
import { useAllMedicinesQuery } from "../redux/medicine/medicinesApi";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Search from "../search/Search";
import { Button, Grid } from "@mui/material";
// import SearchResult from "../search/SearchResult";

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
        {/* <Search></Search> */}
        {/* <SearchResult/> */}
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
             <div className="flex lg:flex-row flex-col gap-2 ">
             <Grid item xs={12} sm={6}>
       {/* Details button */}
        <Button
                     onClick={() => navigate(`/medicine/${medicine._id}`)} 
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      color: "#6366F1",
                      borderColor: "#6366F1",
                      "&:hover": {
                        backgroundColor: "#14919B",
                        borderColor: "#6366F1",
                        color:"#fff"
                      },
                    }}
                  >
                    Deatils
                  </Button>
      </Grid>

      {/* Buy Now Button */}
      <Grid item xs={12} sm={6}>
      <Button
                     onClick={() => navigate(`/buyMedicine/${medicine._id}`)} 
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      color: "#22C55E",
                      borderColor: "#22C55E",
                      "&:hover": {
                        backgroundColor: "#059669",
                        borderColor: "#22C55E",
                        color:"#fff"
                      },
                    }}
                  >
                    Purchase Now
                  </Button>
      </Grid>
             </div>
             
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
