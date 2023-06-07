import React from 'react'
import Header from '../Shared/Header'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default DashboardLayout