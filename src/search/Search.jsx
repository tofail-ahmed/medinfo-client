import  { useState } from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Search = () => {
      const darkMode=useSelector((store)=>store.theme.darkMode);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
   console.log(query)
  };

  return (
    <div className='text-center'>
      <div className='flex items-center'>
<div className="flex items-center border-2 rounded-md border-orange-500">
<div className='flex items-center '>
      <span><FaSearchPlus /></span>
      <input
      className={`${darkMode?" text-black":""}`}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      </div>
      <button onClick={handleSearch} className="bg-green-500 rounded-md px-1">Search</button>
</div>      </div>
    </div>
  );
};

export default Search;
