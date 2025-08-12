import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function stylenavLink(isActive) {
  return isActive ? 'font-bold hover:underline hover:text-[#161616]' : 'hover:underline text-gray-600';
}

const Header = () => {
  return (
    <div>
      {/* Header with Navigation */}
        <header className="bg-white flex justify-between items-center p-4 sm:px-6 lg:px-8">
            <Link to="/">
            <img
                src="./src/assets/logo.png"
                alt="VanLife Logo"
                className="w-32 sm:w-40 lg:w-44"
            />
            </Link>
        <nav className="flex gap-4 sm:gap-6 text-base sm:text-lg">
            <NavLink to="/host" className={({isActive}) => stylenavLink(isActive)}>Host</NavLink>
            <NavLink to="/about" className={({isActive}) => stylenavLink(isActive)}>About</NavLink>
            <NavLink to="/vans" className={({isActive}) => stylenavLink(isActive)}>Vans</NavLink>
        </nav>
        </header>
    </div>
  )
}

export default Header
