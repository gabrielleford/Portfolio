import { Link } from "react-scroll";
import styled from "styled-components";

export const MobileNavContainer = styled.div`
  display: none;

  @media screen and (max-width: 860px) {
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: #fff;
    top: 0;
    right: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }

  @media screen and (min-width: 680px) and (max-width: 859.5px){
    width: 25%;
    justify-content: center;
    align-items: flex-start;
    border-left: thin solid red;
    padding-top: 10%;
    transition: all 0.3s ease-in-out;
  }
`

export const MobileClose = styled.div`
position: absolute;
top:0.5rem;
right: 0.5rem;
font-size: 2.2rem;
`

export const MobileNavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  font-size: 2rem;

  @media (min-width: 680px) and (max-width: 859px) {
    grid-template-rows: repeat(5, 50px);
    font-size: 1.2rem;
  }

  @media screen and (max-width: 420px) {
    grid-template-rows: repeat(4, 60px);
    font-size: 1.7rem;
  }
`

export const MobileBackToTop = styled(Link)`
  

  @media (min-width: 680px) and (max-width: 859px) {
    grid-template-rows: repeat(5, 50px);
    font-size: 1.2rem;
  }
`

export const MobileLink = styled(Link)`
  cursor: pointer;
`