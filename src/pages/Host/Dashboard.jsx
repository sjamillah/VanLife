import React from 'react'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
        <h1>Host Dashboard</h1>
        <Outlet />
    </>
  )
}

export default Dashboard
