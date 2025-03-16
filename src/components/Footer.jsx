import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center py-4 bg-neutral-600 bg-opacity-35 text-neutral-400'>
      <div className="container h-full w-full">
      <div className='flex items-center justify-center gap-4 mb-3'>  
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Contact</Link>
      </div>
      <p className='text-sm'>
        Created By Mahmoud Nasser
      </p>

      </div>
    </footer>
  )
}

export default Footer