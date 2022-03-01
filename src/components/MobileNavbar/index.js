import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { MobileClose, MobileLink, MobileNavContainer, MobileNavMenu } from './MobileNavElements'
import { animateScroll as scroll } from "react-scroll/modules";

const MobileNavbar = ({ isOpen, setIsOpen, toggle }) => {
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
    <MobileNavContainer isOpen={isOpen} setIsOpen={setIsOpen} onClick={toggle}>
      <MobileClose>
        <HiX />
      </MobileClose>
      <MobileNavMenu>
        <MobileLink visible={visible} onClick={() => {toggle()
        toggleTop()}}>
          Back to Top
        </MobileLink>
        <MobileLink
          to='about' 
          onClick={toggle}
          smooth={true}
          duration={500}
          offset={-22}
        >
          About
        </MobileLink>
        <MobileLink 
          to='portfolio' 
          onClick={toggle}
          smooth={true}
          duration={500}
          offset={-19}
        >
          Portfolio
        </MobileLink>
        <MobileLink 
          to='devtools' 
          onClick={toggle}
          smooth={true}
          duration={500}
          offset={-23}
        >
          Dev Tools
        </MobileLink>
        <MobileLink 
          to='contact' 
          onClick={toggle}
          smooth={true}
          duration={500}
          offset={-20}
        >
          Contact
        </MobileLink>
      </MobileNavMenu>
    </MobileNavContainer>
  )
}

export default MobileNavbar
