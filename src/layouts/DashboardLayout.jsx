
import Sidebar from "../ComponentsTemp/Sidebar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
// import { getUserCred } from '../utils/utils';
import AccessDenied from "../ComponentsTemp/AccessDenied";

const DashboardLayout = () => {
  const userCred=useSelector((state)=>state.medInfoUser.medInfoUserCred);
  // console.log(userCred)
  const darkMode=useSelector((store)=>store.theme.darkMode);
 
  if(userCred===null||userCred.role!=="admin"){
    return <AccessDenied/>
  }
  return (
    <div  className={`${darkMode?"bg-black text-white":""}`}>

  
    <div className='flex  min-h-screen'>
     
      <Sidebar></Sidebar>
      <Outlet></Outlet>
     
      
    </div>
    </div>
  )
}

export default DashboardLayout