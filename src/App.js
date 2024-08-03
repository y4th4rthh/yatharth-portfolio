import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Project';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


const App = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  };

  return (
    <div>
     
     <Nav/>

     <Profile/>

      <About/>

      <Experience/>

      <Projects/>

      <Contact/>

      <Footer/>
     
    </div>
  );
};

export default App;
