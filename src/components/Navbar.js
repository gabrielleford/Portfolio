import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex justify-between px-24 py-6 mt-12 mb-24'>
      <h1 className='text-8xl text-dark-teal font-display  navHeader'>Gabrielle Ford</h1>
      <div className='flex justify-evenly'>
        <Link
          className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer rounded-l-lg hover:bg-light-peach navLink'
        >
          About
        </Link>
        <Link
          className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer hover:bg-light-peach navLink'
        >
          Projects
        </Link>
        <Link
          className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer hover:bg-light-peach navLink'
        >
          Dev Tools
        </Link>
        <Link
          className='text-xl text-dark-teal px-3 py-0.5 h-fit cursor-pointer rounded-r-lg hover:bg-light-peach navLink'
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar