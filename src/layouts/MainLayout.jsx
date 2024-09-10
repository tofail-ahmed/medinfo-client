import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import Search from '../search/Search';

const MainLayout = () => {
  const darkMode=useSelector((store)=>store.theme.darkMode);
  // console.log("dark",darkMode)
  return (
    <div className={`${darkMode?"bg-slate-700 text-white":""}`}>
      <Navbar></Navbar>
      {/* <Search></Search> */}
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout