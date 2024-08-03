import React from 'react';

const Nav = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="flex justify-around items-center h-16 dark:bg-white bg-gray-800 shadow-md">
        <div className="text-2xl font-bold dark:text-black text-white">My Portfolio</div>
        <ul className="hidden lg:flex gap-8 text-xl">
          <li><a href="#about" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">About</a></li>
          <li><a href="#experience" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">Experience</a></li>
          <li><a href="#projects" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">Projects</a></li>
          <li><a href="#contact" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">Contact</a></li>
        </ul>
      </nav>
      <nav className="lg:hidden flex justify-between items-center p-4 dark:bg-white bg-gray-800">
        <div className="text-2xl font-bold dark:text-black text-white">Patel Yatharth</div>
        <div className="hamburger-menu relative">
          <div className="hamburger-icon flex flex-col justify-between h-6 w-8 cursor-pointer" onClick={toggleMenu}>
            <span className="block w-full h-1 dark:bg-black bg-white"></span>
            <span className="block w-full h-1 dark:bg-black bg-white"></span>
            <span className="block w-full h-1 dark:bg-black bg-white"></span>
          </div>
          <ul className="menu-links absolute right-0 dark:bg-white bg-gray-800 mt-2 w-48 overflow-hidden transition-max-height duration-300 z-50">
            <li><a href="#about" className="block p-4 text-center dark:text-black text-gray-200" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" className="block p-4 text-center dark:text-black text-gray-200" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" className="block p-4 text-center dark:text-black text-gray-200" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="block p-4 text-center dark:text-black text-gray-200" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
