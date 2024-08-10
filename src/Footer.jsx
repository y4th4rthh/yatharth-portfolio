import React, { useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs'; // Import icons for dark and light mode

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            return newMode;
        });
    };

    const year = new Date().getFullYear();

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`} style={{ cursor: 'default' }}>
            <div className='flex justify-between flex-wrap gap-4 font-rubik'>
                <p className={`text-center w-full sm:w-auto font-light ${isDarkMode ? 'text-black' : 'text-gray-200'}`}>
                    © {year} Yatharth. All rights reserved.
                </p>
                <div className='dark:text-black text-gray-200 flex justify-around sm:w-[250px] w-full'>
                    <a
                        href="mailto:yatharthpatel014@gmail.com"
                        rel="noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                        style={{ cursor: 'pointer' }}
                    >
                        <FiMail className='text-xl' />
                    </a>
                    <a
                        href="https://x.com/ptlyatharth"
                        target='_blank'
                        rel="noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                        style={{ cursor: 'pointer' }}
                    >
                        <FaTwitter className='text-xl' />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yatharth-patel-2505b4288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target='_blank'
                        rel="noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                        style={{ cursor: 'pointer' }}
                    >
                        <AiFillLinkedin className='text-xl' />
                    </a>
                    <a
                        href="https://github.com/y4th4rthh"
                        target='_blank'
                        rel="noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                        style={{ cursor: 'pointer' }}
                    >
                        <FaGithub className='text-xl' />
                    </a>
                   <button
    onClick={toggleDarkMode}
    className={`transition ease-in-out duration-300 rounded-md ${isDarkMode ? 'text-black' : 'text-gray-200'}`}
    aria-label="Toggle dark mode"
      style={{marginBottom: '4px'}}
>
    {isDarkMode ? <BsMoon className='text-xl' /> : <BsSun className='text-xl' />}
</button>


                </div>

            </div>
        </div>
    );
}

export default Footer;
