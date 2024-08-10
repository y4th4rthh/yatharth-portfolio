import React, { useState, useEffect, useRef } from 'react';

import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Profile = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');

    const name = "Yatharth";

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText((prevText) => prevText + name[ref.current - 1]);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen dark:bg-white bg-gray-900 overflow-hidden font-rubik">
            {/* Background Circles */}
            <ul className="absolute inset-0 flex justify-center items-center">
                {Array.from({ length: 10 }).map((_, i) => {
                    const size = Math.random() * 80 + 20; // Random size between 20px and 100px
                    return (
                        <li
                            key={i}
                            className="absolute dark:bg-[#f4f5f8] bg-gray-700"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                borderRadius: '50%', // Ensures the shape is round
                                animation: `animate ${Math.random() * 20 + 10}s linear infinite`,
                                // Random animation duration
                                bottom: `${Math.random() * -150}px`, // Random vertical position
                                left: `${Math.random() * 100}%`, // Random horizontal position
                                opacity: Math.random() * 0.5 + 0.5, // Random opacity
                            }}
                        />
                    );
                })}
            </ul>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <section id="profile" className="flex flex-col justify-center gap-8 p-10 lg:p-40 text-center">
                    <div className="flex flex-col justify-center text-center">
                        <p className="text-2xl font-semibold dark:text-gray-800 text-gray-200">Hello, myself</p>
                        <h1 className="text-7xl font-bold my-4 dark:text-gray-900 text-gray-100">{text}</h1>
                        <p className="text-2xl mb-4 dark:text-gray-800 text-gray-200">Frontend Developer</p>
                        <div className="flex justify-center gap-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={() => window.location.href = 'https://drive.google.com/file/d/1rkYu9n__zS32BYHW7zDO6pj10Jws-6bb/view?usp=drive_link'}
                            >
                                Download CV
                            </button>
                            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition" onClick={() => window.location.href = '#contact'}>
                                Contact Info
                            </button>
                        </div>
                        <div className="dark:text-black text-gray-200 flex justify-center mt-4 gap-4">
                            <a
                                href="https://www.linkedin.com/in/yatharth-patel-2505b4288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target='_blank'
                                rel="noreferrer"
                                className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                                style={{ cursor: 'pointer' }}
                            >
                                <AiFillLinkedin className='text-3xl' />
                            </a>
                            <a
                                href="https://github.com/y4th4rthh"
                                target='_blank'
                                rel="noreferrer"
                                className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                                style={{ cursor: 'pointer' }}
                            >
                                <FaGithub className='text-3xl' />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
