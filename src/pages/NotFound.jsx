import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound