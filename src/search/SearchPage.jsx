// import { useState } from "react";
// import { useSearchMedicineQuery } from "../redux/medicine/medicinesApi";
// import Search from "./Search";
// import Loader from "../components/Loader";
// import SearchResult from "./SearchResult";


// const SearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState(null);

//   const { data, error, isLoading } = useSearchMedicineQuery(searchTerm, {
//     skip: !searchTerm,
//   });

//   const handleSearch = (query) => {
//     setSearchTerm(query);  // <-- this updates the search term when called from the child component
//   };

//   return (
//     <div>
//       {/* Pass handleSearch as the onSearch prop */}
//       <Search onSearch={handleSearch} />  

//       <div>
//         {isLoading && <Loader />}
//         {error && <p>Error fetching data</p>}
//         {data && <SearchResult results={data.data} searchTerm={searchTerm} />}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
