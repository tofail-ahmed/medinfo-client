import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div className='flex '>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      
    </div>
  )
}

export default DashboardLayout