// /* eslint-disable react/prop-types */
// import React from 'react';
// import { Button, Grid, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Loader from '../components /Loader';

// const SearchResult = ({ data, error, isLoading, searchTerm, query }) => {
//   const navigate = useNavigate();

//   const highlightMatch = (text, query) => {
//     if (!text || !query) return text;
//     const regex = new RegExp(`(${query})`, 'gi');
//     return text.replace(regex, '<span class="text-red-500/70 font-bold">$1</span>');
//   };

//   return (
//     <div className="mx-4">
//       {isLoading && <Loader />}
//       {error && <p>Error fetching data</p>}

//       {searchTerm && data?.data.length === 0 && (
//         <Typography variant="h6" color="error" align="center">
//           No medicine found. Provide valid medicine Name
//         </Typography>
//       )}

//       {data?.data.length !== 0 && (
//         <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex justify-center items-center gap-2">
//           Search Results
//         </h1>
//       )}

//       <ul>
//         {data ? (
//           data.data.map((medicine, index) => (
//             <div className="bg-slate-400/30 rounded-md my-2 p-4" key={index}>
//               <div className="flex items-center justify-between lg:flex-row flex-col gap-2">
//                 <div>
//                   <span className="flex items-center text-2xl">
//                     {index + 1}. <li dangerouslySetInnerHTML={{ __html: highlightMatch(medicine?.medicine_name, query) }}></li>
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <h1>Generic: </h1>
//                     <li className="text-sm" dangerouslySetInnerHTML={{ __html: highlightMatch(medicine?.generic_name, query) }}></li>
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <h1>Company: </h1>
//                     <p className="text-sm" dangerouslySetInnerHTML={{ __html: highlightMatch(medicine?.company_name, query) }}></p>
//                   </span>
//                 </div>

//                 <div className="flex flex-col gap-2 w-full lg:w-2/12">
//                   <Grid item xs={12} sm={6}>
//                     <Button
//                       onClick={() => navigate(`/medicine/${medicine._id}`)}
//                       variant="outlined"
//                       size="small"
//                       fullWidth
//                       sx={{
//                         color: "#6366F1",
//                         borderColor: "#6366F1",
//                         "&:hover": {
//                           backgroundColor: "#14919B",
//                           borderColor: "#6366F1",
//                           color: "#FFF"
//                         },
//                       }}
//                     >
//                       Details
//                     </Button>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Button
//                       onClick={() => navigate(`/buyMedicine/${medicine._id}`)}
//                       variant="outlined"
//                       size="small"
//                       fullWidth
//                       sx={{
//                         color: "#22C55E",
//                         borderColor: "#22C55E",
//                         "&:hover": {
//                           backgroundColor: "#059669",
//                           borderColor: "#22C55E",
//                           color: "#fff"
//                         },
//                       }}
//                     >
//                       Purchase Now
//                     </Button>
//                   </Grid>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="flex justify-center items-center">
//             {/* No results message if needed */}
//           </div>
//         )}
//       </ul>

//       {data?.data.length !== 0 && (
//         <span className="flex justify-center">
//           <h1 className="text-2xl text-red-500 font-semibold my-6 flex items-center gap-2">
//             X------------End of search result------------X
//           </h1>
//         </span>
//       )}
//     </div>
//   );
// };

// export default SearchResult;

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ results, searchTerm }) => {
  const navigate = useNavigate();

  const highlightMatch = (text, query) => {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      '<span class="text-red-500/70 font-bold">$1</span>'
    );
  };

  if (!results || results.length === 0) {
    return (
      <Typography variant="h6" color="error" align="center">
        No medicine found. Provide valid medicine Name.
      </Typography>
    );
  }

  return (
    <div className="search-results">
      <h1 className="text-2xl text-red-500 font-semibold text-center my-6">
        Search Results
      </h1>
      <ul>
        {results.map((medicine, index) => (
          <div className="bg-slate-400/30 rounded-md my-2 p-4" key={index}>
            <div className="flex justify-between">
              <div>
                <span className="text-2xl">
                  {index + 1}.{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightMatch(
                        medicine.medicine_name,
                        searchTerm
                      ),
                    }}
                  />
                </span>
                <p>Generic: {medicine.generic_name}</p>
                <p>Company: {medicine.company_name}</p>
              </div>
              <Button
                onClick={() => navigate(`/medicine/${medicine._id}`)}
                variant="outlined"
                size="small"
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
