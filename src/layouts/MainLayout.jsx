import Navbar from "../ComponentsTemp/Navbar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import Container from "../ComponentsTemp/Container";
import Footer from "../ComponentsTemp/Footer/Footer";

// import Banner from '../home/Banner';
// import SearchResult from '../search/SearchResult';
// import SearchResult from '../search/SearchResult';
// import { useSearchMedicineQuery } from '../redux/medicine/medicinesApi';
// import { useState } from 'react';

const MainLayout = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  // const [searchTerm, setSearchTerm] = useState(null);
  // const { data, error, isLoading } = useSearchMedicineQuery(searchTerm, {
  //   skip: !searchTerm,
  // });

  return (
    <div className={`${darkMode ? "bg-slate-700 text-white" : ""}`}>
      <Navbar />

      {/* <Banner />
       <SearchResult/> */}
      <Container className={"mt-10"}>
        <Outlet />
      </Container>
    <Footer/>
    </div>
  );
};

export default MainLayout;
