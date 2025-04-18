import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">IT Consultancy</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/clients" className="hover:underline">Clients</Link>
          <Link to="/careers" className="hover:underline">Careers</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar