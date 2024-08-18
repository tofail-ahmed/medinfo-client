import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const MainLayout = () => {
  const darkMode=useSelector((store)=>store.theme.darkMode);
  // console.log("dark",darkMode)
  return (
    <div className={`${darkMode?"bg-black text-white":""}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout