import './App.css';
// import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import DevTools from './components/DevTools';
// import Contact from './components/Contact';
// import Quotes from './components/Quotes';
// import MobileNavbar from './components/MobileNavbar';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const about = 'about';
  const portfolio = 'portfolio';
  const devtools = 'devtools';
  const contact = 'contact';

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar />
      <About about={about} />
      <Portfolio portfolio={portfolio} />
      {/* <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Quotes />
      <DevTools devtools={devtools} />
      <Contact contact={contact} /> */}
    </>
  );
}

export default App;
