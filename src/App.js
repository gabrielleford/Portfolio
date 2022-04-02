import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import DevTools from './components/DevTools';
import Contact from './components/Contact';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MobileAside from './components/MobileAside';
import { AsideClass, NavbarClass } from './components/Reusable/Data';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const about = 'about';
  const projects = 'projects';
  const devtools = 'devtools';
  const contact = 'contact';

  return (
    <>
      <MobileAside {...AsideClass} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar {...NavbarClass} isOpen={isOpen} setIsOpen={setIsOpen} />
      <About about={about} />
      <Projects projects={projects} />
      <DevTools devtools={devtools} />
      <Contact contact={contact} />
    </>
  );
}

export default App;
