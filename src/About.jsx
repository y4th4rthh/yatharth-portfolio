import React from 'react';

const About = () => {
    return (
        <div>
            {/* About Section */}
            <section id="about" className="py-20 lg:py-36 px-5 lg:px-40 dark:bg-gray-50 bg-gray-800">
                <div className="text-center mb-10">
                    <p className="text-lg font-semibold dark:text-black text-gray-200">Get To Know More</p>
                    <h1 className="text-5xl font-bold my-4 dark:text-black text-gray-200">About Me</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center">
                    <div className="flex flex-col gap-8 justify-center">
                        <div className="flex flex-wrap gap-8 justify-center">
                            <div className='sm:w-[290px] w-full'>
                                <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
                                    <div className='rounded-[20px] py-5 px-14 min-h-[280px] flex justify-evenly items-center flex-col dark:bg-white bg-gray-900 shadow-lg'>
                                        <img src='https://csgeeek.github.io/web.png' alt="Experience icon" className="w-24 h-24 mb-4 rotate-slow" />
                                        <h3 className="text-xl font-semibold mb-2 dark:text-black text-gray-200">Tech Enthusiast</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='sm:w-[290px] w-full'>
                                <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
                                    <div className='rounded-[20px] py-5 px-14 min-h-[280px] flex justify-evenly items-center flex-col dark:bg-white bg-gray-900 shadow-lg'>
                                        <img src='https://csgeeek.github.io/web.png' alt="Experience icon" className="w-24 h-24 mb-4 rotate-slow" />
                                        <h3 className="text-xl font-semibold mb-2 dark:text-black text-gray-200">Web Developer</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='sm:w-[290px] w-full'>
                                <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
                                    <div className='rounded-[20px] py-5 px-14 min-h-[280px] flex justify-evenly items-center flex-col dark:bg-white bg-gray-900 shadow-lg'>
                                        <img src='https://csgeeek.github.io/web.png' alt="Experience icon" className="w-24 h-24 mb-4 rotate-slow" />
                                        <h3 className="text-xl font-semibold mb-2 dark:text-black text-gray-200">Photographer</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:px-16 px-2'>
                            <p className='mt-3 mb-6 text-[17px] dark:text-black text-gray-300 max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Patel Yatharth, a 2025 graduate🎓 with a passion for crafting robust backend systems and captivating web applications.I specialize in both Frontend and MERN stacks🚀.
                                <br />
                                I am currently pursuing a Bachelor of Engineering in Computer Science at Maharaja Sayajirao University of Baroda 🎓. My academic journey has equipped me with proficiency in programming languages such as C, C++, Java, and Python 💻, as well as familiarity with front-end technologies like React.js 🌐. I also have foundational knowledge of SQL for database management 📊.<br/>
                                <br/>
                                Driven by a strong enthusiasm for learning 📚, I am a highly motivated computer engineering graduate eager to excel in challenging technical environments 🚀. I am keen to contribute to innovative projects that push the boundaries of technology 🛠️ while continuously expanding my knowledge and skill set 🌟.</p>


                            <a href='https://drive.google.com/file/d/1rkYu9n__zS32BYHW7zDO6pj10Jws-6bb/view?usp=drive_link' >
                                <button className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-300'>
                                    View Resume →
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
