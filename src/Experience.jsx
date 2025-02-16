import React from 'react';
import checkmark from './assets/checkmark.png';

const Experience = () => {
    return (
        <div>
            {/* Experience Section */}
            <section id="experience" className="py-20 lg:py-40 px-5 lg:px-40 dark:bg-gray-50 bg-gray-900 font-rubik">
                <div className="text-center mb-10">
                    <p className="text-lg font-semibold dark:text-gray-800 text-gray-200">Explore My</p>
                    <h1 className="text-5xl font-bold my-4 dark:text-gray-900 text-gray-100">Experience</h1>
                    <div className="w-24 h-1 bg-gray-100 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="flex flex-col justify-center gap-8">
                    <div className="flex flex-col justify-center lg:flex-row gap-8">
                        <div className="flex-1 p-8 dark:bg-white bg-gray-800 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-center dark:text-gray-900 text-gray-100">Frontend Techstacks</h2>
                            <div className="flex flex-wrap justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">HTML</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Experienced</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">CSS</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Experienced</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Reactjs</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Intermediate</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Tailwind CSS</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Intermediate</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">TypeScript</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Basic</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Nextjs</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-8 dark:bg-white bg-gray-800 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-center dark:text-gray-900 text-gray-100">Backend Techstacks</h2>
                            <div className="flex flex-wrap justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Nodejs</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Experienced</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Python</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Intermediate</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Java Spring Boot</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Basic</p>
                                    </div>
                                </div>
        
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Nextjs</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-8 dark:bg-white bg-gray-800 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-center dark:text-gray-900 text-gray-100">Known Databases</h2>
                            <div className="flex flex-wrap justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">MongoDB</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Experienced</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">MySQL</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Experienced</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={checkmark} alt="Experience icon" className="w-6 h-6" />
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-gray-900 text-gray-100">Firebase</h3>
                                        <p className="dark:text-gray-800 text-gray-200">Intermediate</p>
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;
