import { useState } from "react";
import { BsArrowUp as Arrow } from "react-icons/bs";
import { HiMenu } from 'react-icons/hi';
import { BackToTop, MobileBackToTop, MobileMenu, NavbarContainer, NavbarLi, NavbarUl, NavLink } from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll/modules";

const Navbar = ({ isOpen, toggle }) => {
  const [visible, setVisible] = useState(false);
  // const [mobileVisible, setMobileVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  }

  // const toggleMobileVisible = () => {

  // }

  const toggleTop = () => {
    scroll.scrollToTop();
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <NavbarContainer visible={visible}>
      <MobileMenu isOpen={isOpen}>
        <HiMenu onClick={toggle} />
      </MobileMenu>
      <MobileBackToTop visible={visible} onClick={toggleTop}>
        Gabrielle Ford
      </MobileBackToTop>
      <NavbarUl>
        {visible ? 
          <NavbarLi>
            <BackToTop onClick={toggleTop}><Arrow /></BackToTop>
          </NavbarLi> : ''
        }
        <NavbarLi>
          <NavLink 
            isDynamic={true}
            hashSpy={true}
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
          >About</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink 
            hashSpy={true}
            to='portfolio'
            smooth={true}
            duration={500}
            spy={true}
            offset={-21}
            isDynamic={true}
          >Portfolio</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink 
            hashSpy={true}
            to='devtools'
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
            isDynamic={true}
          >Dev Tools</NavLink>
        </NavbarLi>
        <NavbarLi>
          <NavLink 
            hashSpy={true}
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
            isDynamic={true}
          >Contact</NavLink>
        </NavbarLi>
      </NavbarUl>
    </NavbarContainer>
  )
}

export default Navbar;