import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll/modules";
import { BsArrowUp, BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  }

  const toggleTop = () => {
    scroll.scrollToTop();
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <h1 className='text-3xl text-dark-teal z-30 top-7 font-display absolute left-5 xs:text-5xl sm:text-7xl lg-xl:text-8xl xl:top-14 lg-xl:left-16 lg-xl:w-28 xl:w-fit navHeader'>Gabrielle Ford</h1>
      <div className={props.isOpen ? props.hidden : props.visible}>
        <HiMenu onClick={() => props.setIsOpen(!props.isOpen)} className='relative right-4 xs:right-2 text-2xl xs:text-4xl sm:text-5xl sm:right-10 cursor-pointer text-dark-teal' />
      </div>
      <div className='hidden sticky sm:bg-peach z-20 top-0 left-0 w-full lg-xl:flex sm:justify-end lg:px-12 xl:px-24 py-6 mt-12 mb-6 sm:mb-24 xl:mb-5 overflow-auto'>
        {/* <h1>Gabrielle Ford</h1> */}
        <div className='grid space-y-4'>
          <div className='flex justify-evenly'>
            <Link>
              <BsArrowUp onClick={() => toggleTop()} className={visible ? 'text-xl text-dark-teal px-1 py-1.5 h-fit w-fit opacity-100 cursor-pointer transition-all ease-in-out duration-100' : 'text-xl text-dark-teal px-1 py-1.5 h-fit w-fit opacity-0 cursor-pointer active:bg-teal transition-all ease-in-out duration-100' } />
            </Link>
            <Link
              className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer rounded-l-lg active:bg-teal hover:bg-light-peach transition-all ease-in-out duration-100 navLink'
              isDynamic={true}
              hashSpy={true}
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              offset={-120}
            >
              About
            </Link>
            <Link
              className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer active:bg-teal hover:bg-light-peach transition-all ease-in-out duration-100 navLink'
              isDynamic={true}
              hashSpy={true}
              to='projects'
              smooth={true}
              duration={500}
              spy={true}
              offset={-120}
            >
              Projects
            </Link>
            <Link
              className='text-xl text-dark-teal px-3 py-0.5 border-r-2 border-dark-peach h-fit cursor-pointer active:bg-teal hover:bg-light-peach transition-all ease-in-out duration-100 navLink'
              isDynamic={true}
              hashSpy={true}
              to='devtools'
              smooth={true}
              duration={500}
              spy={true}
              offset={-260}
            >
              Dev Tools
            </Link>
            <Link
              className='text-xl text-dark-teal px-3 py-0.5 h-fit cursor-pointer rounded-r-lg active:bg-teal hover:bg-light-peach transition-all ease-in-out duration-100 navLink'
              isDynamic={true}
              hashSpy={true}
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              offset={-160}
            >
              Contact
            </Link>
          </div>
          <div className='flex px-4 justify-end space-x-7 text-dark-teal '>
            <a href="../assets/GabrielleFord'sResume.pdf" download className='transition-all ease-in-out duration-200 hover:scale-110'>
              <BsFileEarmarkPdfFill className='text-3xl'/>
            </a>
            <a href="https://www.linkedin.com/in/fdgabrielle" target="_blank" rel='noreferrer' className='transition-all ease-in-out duration-200 hover:scale-110'>
              <BsLinkedin className='text-3xl'/>
            </a>
            <a href='https://github.com/gabrielleford' target="_blank" rel='noreferrer' className='transition-all ease-in-out duration-200 hover:scale-110'>
              <BsGithub className='text-3xl'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

//text-5xl