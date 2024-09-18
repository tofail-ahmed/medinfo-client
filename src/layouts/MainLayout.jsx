import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import Search from '../search/Search';
import Container from '../components/CONTAINER';
import Banner from '../home/Banner';

const MainLayout = () => {
  const darkMode=useSelector((store)=>store.theme.darkMode);
  // console.log("dark",darkMode)
  return (
    
      <div className={`${darkMode?"bg-slate-700 text-white":""}`}>
      <Navbar></Navbar>
    <Banner/>
      <Container>
      <Outlet></Outlet>
      </Container>
    </div>
    
  )
}

export default MainLayout