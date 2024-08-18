import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const DashboardLayout = () => {
  const darkMode=useSelector((store)=>store.theme.darkMode)
  return (
    <div  className={`${darkMode?"bg-black text-white":""}`}>

  
    <div className='flex '>
     
      <Sidebar></Sidebar>
      <Outlet></Outlet>
     
      
    </div>
    </div>
  )
}

export default DashboardLayout