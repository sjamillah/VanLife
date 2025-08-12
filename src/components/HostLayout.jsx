import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function getActiveStyle(isActive) {
  return isActive
    ? 'hover:underline hover:text-black text-blue-500'
    : 'hover:underline hover:text-black'
}

const HostLayout = () => {
  return (
    <>
      <nav className='flex flex-col sm:flex-row gap-6 sm:gap-8 text-gray-600 items-start p-4 text-start text-base font-semibold'>
        {/* We use the end prop to only match the route if it exactly matches, not if it's just a prefix */}
        <NavLink to="/host" end className={({isActive}) => getActiveStyle(isActive)}>Dashboard</NavLink>
        <NavLink 
          to="/host/income" 
          className={({isActive}) => getActiveStyle(isActive)}>Income</NavLink>
          <NavLink 
          to="/host/vans" 
          className={({isActive}) => getActiveStyle(isActive)}>Vans</NavLink>
        <NavLink to="/host/reviews" className={({isActive}) => getActiveStyle(isActive)}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
