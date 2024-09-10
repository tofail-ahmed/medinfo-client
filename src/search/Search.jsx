import { useState } from 'react';
import { IconButton, TextField, InputAdornment } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useSearchMedicineQuery } from '../redux/medicine/medicinesApi';
import Loader from '../components/Loader';
import { NavLink, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.theme.darkMode);
  const textColor=darkMode?"white":"black"
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);

  const { data, error, isLoading } = useSearchMedicineQuery(searchTerm, {
    skip: !searchTerm, // Skip the query if searchTerm is null
  });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(query);
  };

  const highlightMatch = (text, query) => {
    if (!text || !query) return text; 
    const regex = new RegExp(`(${query})`, 'gi'); 
    return text.replace(regex, '<span class="text-red-500">$1</span>');
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4 mx-6  ">
        <TextField
        // color="textColor"
          label="Search by name/genric/company"
          value={query}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
          // fullWidth
        />
      </div>

      {isLoading && <Loader />}
      {error && <p>Error fetching data</p>}

      <div className="mx-10">
        {
          data&&(
            <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex justify-center items-center gap-2">
            Search Results
          </h1>
          )
        }
        <ul>
          {data ? (
           
            data.data.map((medicine, index) => (
              <div className="bg-slate-400/30 rounded-md my-4 px-10" key={index}>
               <span className="flex items-center text-2xl">
               {index+1}. <li
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(medicine?.medicine_name, query),
                  }}
                ></li>
               </span>
                <li
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: `<span class="text-fuchsia-800 font-semibold">Generic:</span> ${highlightMatch(medicine?.generic_name, query)}`,
                  }}
                ></li>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: `<span class="text-fuchsia-800 font-semibold">Company:</span> ${highlightMatch(medicine?.company_name, query)}`,
                  }}
                ></p>

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
            ))
          ) : (
            <div className="flex justify-center items-center">
              {/* <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex items-center gap-2">
                Search your Medicine by name, company, or group
              </h1> */}
            </div>
          )}
        </ul>
      </div>
      <span className="flex justify-center">
      {
        data&&(<h1 className="text-2xl text-red-500 font-semibold  my-6 flex items-center gap-2 ">
          X------------End of search rtesult------------X
         </h1>)
      }
      </span>
    </div>
  );
};

export default Search;
