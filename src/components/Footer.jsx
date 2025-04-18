import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 text-center p-4">
      <p>&copy; {new Date().getFullYear()} IT Consultancy. All rights reserved.</p>
    </footer>
  )
}

export default Footer