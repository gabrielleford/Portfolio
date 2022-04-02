import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll/modules";
import { HiX } from 'react-icons/hi'
import { BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from 'react-icons/bs';

const MobileAside = (props) => {
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
    <div onClick={() => props.setIsOpen(!props.isOpen)} className={props.isOpen ? props.visible : props.hidden}>
      <div className='absolute right-4 xs:right-2 text-2xl xs:text-4xl sm:text-5xl sm:right-10 cursor-pointer text-dark-teal'>
        <HiX />
      </div>
      <div className='grid gap-y-0 py-16 text-center text-dark-teal text-4xl'>
        <Link 
          onClick={() => {
            toggleTop()
            props.setIsOpen(!props.isOpen)
          }}
          className={visible ? 'cursor-pointer h-fit opacity-100 navLink py-6 border-b-4 border-b-dark-peach hover:bg-light-peach active:bg-teal transition-all ease-in-out duration-300' : 'cursor-pointer h-0 opacity-0 navLink py-0 border-none hover:bg-light-peach active:bg-teal transition-all ease-out duration-300'}
        >
          Back to top
        </Link>
        <Link
          className='cursor-pointer navLink py-6 border-b-4 border-b-dark-peach hover:bg-light-peach active:bg-teal'
          onClick={() => props.setIsOpen(!props.isOpen)}
          to='about'
          smooth={true}
          duration={500}
          offset={-45}
        >
          About
        </Link>
        <Link
          className='cursor-pointer navLink py-6 border-b-4 border-b-dark-peach hover:bg-light-peach active:bg-teal'
          onClick={() => props.setIsOpen(!props.isOpen)}
          to='projects'
          smooth={true}
          duration={500}
          offset={-45}
        >
          Projects
        </Link>
        <Link
          className='cursor-pointer navLink py-6 border-b-4 border-b-dark-peach hover:bg-light-peach active:bg-teal'
          onClick={() => props.setIsOpen(!props.isOpen)}
          to='devtools'
          smooth={true}
          duration={500}
          offset={-155}
        >
          Dev Tools
        </Link>
        <Link
          className='cursor-pointer navLink py-6 border-b-4 border-b-dark-peach hover:bg-light-peach active:bg-teal'
          onClick={() => props.setIsOpen(!props.isOpen)}
          to='contact'
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
        <div className='flex justify-center px-4 mt-7 space-x-7 text-dark-teal'>
          <a href="../assets/GabrielleFordsResume.pdf" target="_blank" rel='noreferrer' className='transition-all ease-in-out duration-200 hover:scale-110'>
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
  )
}

export default MobileAside