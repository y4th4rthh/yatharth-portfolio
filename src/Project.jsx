// import React from 'react';
// import project1 from './assets/GEE.png';
// import project2 from './assets/Resume.png';
// import project3 from './assets/TimeGuardian.png';
// import project4 from './assets/ICC.png';

// const Project = () => {
//     return (
//         <div>
//             {/* Projects Section */}
//             <section id="projects" className="py-20 lg:py-40 px-3 lg:px-40 dark:bg-gray-50 bg-gray-800 font-rubik">
//                 <div className="text-center mb-10">
//                     <p className="text-lg font-semibold dark:text-gray-800 text-gray-200">Some Of My Recent Works</p>
//                     <h1 className="text-5xl font-bold my-4 dark:text-gray-900 text-gray-100">Projects</h1>
//                 </div>
//                 <div className="flex flex-col justify-center lg:flex-row mb-10 gap-8">
//     <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
//         <img src={project1} alt="Gujarat Entrance Exam" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
//         <div className="sm:p-8 p-4">
//             <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Gujarat Entrance Exam</h2>
//         <p className="dark:text-gray-700 text-gray-300 mb-4">
//             • Gujarat Entrance Exam is an exam portal designed using Vite.js and Java Sprint Boot along with Tailwind CSS. It employs modern technologies to provide a user-friendly experience, automating the allocation of exam seats and issuance of hall tickets post-registration.
//         </p>
//         <a href="https://github.com/y4th4rthh/seat-allocation-system" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
//         </div> 
//     </div>
//     <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
//         <img src={project2} alt="Quick Resume" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
//         <div className="sm:p-8 p-4">
//             <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Quick Resume</h2>
//         <p className="dark:text-gray-700 text-gray-300 mb-4">
//             • Quick Resume is a web-based application designed to automate the creation of resumes using Vite.js and Node.js technologies. It provides users with a streamlined experience for generating professional resumes tailored to their specific needs.
//         </p>
//         <a href="https://github.com/y4th4rthh/quick-resume-generator" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
//         </div>
//     </div>
// </div>

// <div className="flex flex-col justify-center lg:flex-row mt-10 gap-8">
//     <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
//         <img src={project3} alt="Time Guardian" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
//         <div className="sm:p-8 p-4">
//              <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Time Guardian</h2>
//         <p className="dark:text-gray-700 text-gray-300 mb-4">
//             • Time Guardian is a comprehensive employee management system designed to streamline administrative tasks and enhance workplace efficiency using modern technologies. It offers secure work hour monitoring and fosters communication between managers and employees.
//         </p>
//         <a href="https://github.com/y4th4rthh/time-guardian" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
//         </div>
       
//     </div>
//     <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
//         <img src={project4} alt="I Can Compile ahh Editor" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
//         <div className="sm:p-8 p-4">
//              <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Code Wizard</h2>
//         <p className="dark:text-gray-700 text-gray-300 mb-4">
//             • An innovative platform offering tutorials for various web technologies, featuring a built-in editor for writing, testing, and refining code efficiently—all in one place.
//         </p>
//         <a href="https://github.com/y4th4rthh/text-editor-app" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
//         </div>
       
//     </div>
// </div>

//             </section>
//         </div>
//     );
// }

// export default Project;

import React from 'react';
import project1 from './assets/GEE.png';
import project2 from './assets/Resume.png';
import project3 from './assets/TimeGuardian.png';
import project4 from './assets/ICC.png';

const Project = () => {
    return (
        <div>
            {/* Projects Section */}
            <section id="projects" className="py-20 lg:py-32 px-4 lg:px-16 flex justify-center items-center dark:bg-gradient-to-br dark:from-gray-50 dark:to-gray-100 bg-gradient-to-br from-gray-800 to-gray-900 font-rubik">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-lg font-medium dark:text-gray-100 text-blue-400 mb-2">Featured Work</p>
                        <h1 className="text-4xl md:text-5xl font-bold my-4 dark:text-gray-900 text-gray-100">Recent Projects</h1>
                        <div className="w-24 h-1 bg-gray-100 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="w-full  grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 mb-16">
                        {/* Project 1 */}
                        <div className="group overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-white bg-gray-900 dark:bg-opacity-90 bg-opacity-90 backdrop-blur-sm">
                            <div className="relative overflow-hidden">
                                <img src={project1} alt="Gujarat Entrance Exam" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <p className="text-sm font-semibold uppercase dark:text-blue-600 text-blue-400">Education</p>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-gray-900 text-gray-100">Gujarat Entrance Exam</h2>
                                <p className="dark:text-gray-700 text-gray-300 mb-6 leading-relaxed">
                                    An exam portal built with Vite.js and Java Spring Boot, featuring automated seat allocation and hall ticket generation for a seamless testing experience.
                                </p>
                                <a href="https://github.com/y4th4rthh/seat-allocation-system" className="inline-flex items-center dark:text-blue-600 text-blue-400 font-medium group">
                                    View Project 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div> 
                        </div>
                        
                        {/* Project 2 */}
                        <div className="group overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-white bg-gray-900 dark:bg-opacity-90 bg-opacity-90 backdrop-blur-sm">
                            <div className="relative overflow-hidden">
                                <img src={project2} alt="Quick Resume" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                    <p className="text-sm font-semibold uppercase dark:text-blue-600 text-blue-400">Productivity</p>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-gray-900 text-gray-100">Quick Resume</h2>
                                <p className="dark:text-gray-700 text-gray-300 mb-6 leading-relaxed">
                                    A web application that streamlines resume creation using Vite.js and Node.js, helping users generate professional resumes tailored to their needs.
                                </p>
                                <a href="https://github.com/y4th4rthh/quick-resume-generator" className="inline-flex items-center dark:text-blue-600 text-blue-400 font-medium group">
                                    View Project 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Project 3 */}
                        <div className="group overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-white bg-gray-900 dark:bg-opacity-90 bg-opacity-90 backdrop-blur-sm">
                            <div className="relative overflow-hidden">
                                <img src={project3} alt="Time Guardian" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                                    <p className="text-sm font-semibold uppercase dark:text-blue-600 text-blue-400">Management</p>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-gray-900 text-gray-100">Time Guardian</h2>
                                <p className="dark:text-gray-700 text-gray-300 mb-6 leading-relaxed">
                                    A comprehensive employee management system that streamlines administrative tasks with secure work hour monitoring and enhanced communication.
                                </p>
                                <a href="https://github.com/y4th4rthh/time-guardian" className="inline-flex items-center dark:text-blue-600 text-blue-400 font-medium group">
                                    View Project 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Project 4 */}
                        <div className="group overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-white bg-gray-900 dark:bg-opacity-90 bg-opacity-90 backdrop-blur-sm">
                            <div className="relative overflow-hidden">
                                <img src={project4} alt="Code Wizard" className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                    <p className="text-sm font-semibold uppercase dark:text-blue-600 text-blue-400">Education</p>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-gray-900 text-gray-100">Code Wizard</h2>
                                <p className="dark:text-gray-700 text-gray-300 mb-6 leading-relaxed">
                                    An innovative platform offering tutorials for various web technologies with a built-in editor for writing and testing code in one place.
                                </p>
                                <a href="https://github.com/y4th4rthh/text-editor-app" className="inline-flex items-center dark:text-blue-600 text-blue-400 font-medium group">
                                    View Project 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
