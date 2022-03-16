import React from 'react'
import { Link } from 'react-scroll';
import { BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='flex justify-between px-24 py-6 mt-12 mb-24'>
      <h1 className='text-8xl text-dark-teal font-display navHeader'>Gabrielle Ford</h1>
      <div className='grid'>
        <div className='flex justify-evenly'>
          <Link
            className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer rounded-l-lg hover:bg-light-peach navLink'
            isDynamic={true}
            hashSpy={true}
            to='about'
            smooth={true}
            duration={500}
            spy={true}
          >
            About
          </Link>
          <Link
            className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer hover:bg-light-peach navLink'
            isDynamic={true}
            hashSpy={true}
            to='projects'
            smooth={true}
            duration={500}
            spy={true}
          >
            Projects
          </Link>
          <Link
            className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer hover:bg-light-peach navLink'
            isDynamic={true}
            hashSpy={true}
            to='devtools'
            smooth={true}
            duration={500}
            spy={true}
          >
            Dev Tools
          </Link>
          <Link
            className='text-xl text-dark-teal px-3 py-0.5 h-fit cursor-pointer rounded-r-lg hover:bg-light-peach navLink'
            isDynamic={true}
            hashSpy={true}
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
          >
            Contact
          </Link>
        </div>
        <div className='flex px-4 justify-end space-x-7 text-dark-teal'>
          <a href="../assets/GabrielleFord'sResume.pdf" download>
            <BsFileEarmarkPdfFill className='text-3xl'/>
          </a>
          <a href="https://www.linkedin.com/in/fdgabrielle" target="_blank" rel='noreferrer'>
            <BsLinkedin className='text-3xl'/>
          </a>
          <a href='https://github.com/gabrielleford' target="_blank" rel='noreferrer'>
            <BsGithub className='text-3xl'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar