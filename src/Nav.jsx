import React, { useState ,useEffect} from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <nav className="bg-gray-800 p-4 dark:bg-white dark:text-black  text-white  w-full z-10 top-0 font-rubik" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between font-bold dark:text-black text-white">
        
        {/* <div className="hidden sm:flex space-x-4 items-center gap-6 text-md font-semibold">
          <Link to='#profile'>Home</Link>
          <Link to='#about'>About</Link>
        </div> */}
        <div className="text-3xl sm:text-2xl font-extrabold">
          <a href="#profile">Patel Yatharth</a>
        </div>
        <div className="hidden sm:flex space-x-4 items-center gap-6 text-md font-semibold">
          <a href="#about" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">About</a>
          <a href="#experience" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">Experience</a>
          <a href="#projects" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">Projects</a>
         <a href="#contact" className="dark:hover:text-gray-500 hover:text-gray-300 dark:text-black text-gray-200">Contact</a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 z-50 left-0 w-full h-full bg-gray-800 text-white dark:bg-white  text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none dark:text-black">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
             <li><a href="#about" className="block p-4 text-center dark:text-black text-gray-200" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#experience" className="block p-4 text-center dark:text-black text-gray-200" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#projects" className="block p-4 text-center dark:text-black text-gray-200" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#contact" className="block p-4 text-center dark:text-black text-gray-200" onClick={closeMobileMenu}>Contact</a></li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
