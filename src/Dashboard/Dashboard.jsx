
import { NavLink } from "react-router-dom";
import { useAllMedicinesQuery } from "../redux/medicine/medicinesApi";

const Dashboard = () => {
  const { data, isLoading } = useAllMedicinesQuery("");
  if (isLoading) {
    return <div className="text-3xl text-center">Loading....</div>;
  }
  // const user = JSON.parse(localStorage.getItem('user'));
// console.log(user)
  return (
    <div className="mx-10">
      <h1>This is Dashboard Home</h1>

    
    </div>
  );
};

export default Dashboard