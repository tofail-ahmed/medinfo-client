
import Navbar from '../ComponentsTemp/Navbar';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import Container from "../ComponentsTemp/Container"


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
      <Container>
      
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
