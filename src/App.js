import './App.css';
// import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import DevTools from './components/DevTools';
import Contact from './components/Contact';
// import Quotes from './components/Quotes';
// import MobileNavbar from './components/MobileNavbar';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const about = 'about';
  const projects = 'projects';
  const devtools = 'devtools';
  const contact = 'contact';

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar />
      <About about={about} />
      <Projects projects={projects} />
      <DevTools devtools={devtools} />
      <Contact contact={contact} />
      {/* <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Quotes /> */}
    </>
  );
}

export default App;
