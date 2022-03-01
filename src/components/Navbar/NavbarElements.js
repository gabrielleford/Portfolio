import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0vh;
  left: 0vw;
  width: 100%;
  height: 50px;
  background-color: ${({ visible }) => (visible ? '#fff' : 'none')};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  //border-bottom: ${({ visible }) => (visible ? 'solid 1px #f5f5f5' : 'none' )};
`

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 860px) {
    display: block;
    position: absolute;
    font-size: 2.2rem;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    top: ${({ isOpen }) => (isOpen ? '-100%' : '0.5rem')};
  }
`

export const MobileBackToTop = styled.a`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 860px) {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    margin-left: auto;
    margin-right: auto;
  }

`

export const NavbarUl = styled.ul`
  position: relative;
  right: 0.5rem;

  @media screen and (max-width: 860px) {
    display: none;
  }
`

export const NavbarLi = styled.li`
  list-style-type: none;
  display: inline;
  margin-left: 0.5rem;
  font-size: .85rem;
  cursor: pointer;
`

export const NavLink = styled(LinkS)`
  text-decoration: none;

  &:active {
    text-decoration: underline;
  }
`

export const BackToTop = styled.a`
  text-decoration: none;
`