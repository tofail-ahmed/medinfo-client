import { useState } from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useSearchMedicineQuery } from '../redux/medicine/medicinesApi';
import { GiHealingShield } from "react-icons/gi";
import Loader from '../components/Loader';



const Search = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);
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
// console.log(data.data)
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center">
        <div className="flex items-center border-2 rounded-md border-orange-500">
          <div className="flex items-center">
            <span className="p-1">
              <FaSearchPlus />
            </span>
            <input
              className={`${darkMode ? "text-black" : ""}`}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search..."
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-green-500 rounded-md px-1"
          >
            Search
          </button>
        </div>
      </div>

      {isLoading && <Loader/>}
      {error && <p>Error fetching data</p>}
      <div className="mx-10">
      <ul>
        {data? (data.data.map((medicine, index) => (
          <div className="bg-slate-400/30 rounded-md my-4 px-10" key={index}>
            <li className="text-2xl" >{index+1}. {medicine.medicine_name}</li>
            <li className="text-sm" ><span className="text-fuchsia-800 font-semibold">Genric:</span> {medicine.generic_name}</li>
            <p className="text-sm" ><span className="text-fuchsia-800 font-semibold">Descriptions:</span> {medicine.description}</p>
            <p className="text-sm" ><span className="text-fuchsia-800 font-semibold">Actions:</span> {medicine.actions}</p>
            <div className="flex gap-4">
            <h1>Alternative Medicines</h1>
           <div>
           {
                 
                 medicine.alt_medicines.map((m,i)=>(
                       <li className="text-lg" key={i}>{i+1}. {m}</li>
                 ))
           }
           </div>
            </div>
          </div>
        ))):<div className='flex justify-center items-center'>
            <h1 className='text-2xl text-red-500 font-semibold text-center my-6 flex items-center gap-2'><GiHealingShield />
            Search your Medicine by name, company or group<GiHealingShield />
            </h1>
            </div>}
      </ul>
    </div>
    </div>
  );
};

export default Search;
