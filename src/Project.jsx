import React from 'react';
import project1 from './assets/GEE.png';
import project2 from './assets/Resume.png';
import project3 from './assets/TimeGuardian.png';
import project4 from './assets/ICC.png';

const Project = () => {
    return (
        <div>
            {/* Projects Section */}
            <section id="projects" className="py-20 lg:py-40 px-3 lg:px-40 dark:bg-gray-50 bg-gray-800 font-rubik">
                <div className="text-center mb-10">
                    <p className="text-lg font-semibold dark:text-gray-800 text-gray-200">Some Of My Recent Works</p>
                    <h1 className="text-5xl font-bold my-4 dark:text-gray-900 text-gray-100">Projects</h1>
                </div>
                <div className="flex flex-col justify-center lg:flex-row mb-10 gap-8">
    <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
        <img src={project1} alt="Gujarat Entrance Exam" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
        <div className="sm:p-8 p-4">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Gujarat Entrance Exam</h2>
        <p className="dark:text-gray-700 text-gray-300 mb-4">
            • Gujarat Entrance Exam is an exam portal designed using Vite.js and Java Sprint Boot along with Tailwind CSS. It employs modern technologies to provide a user-friendly experience, automating the allocation of exam seats and issuance of hall tickets post-registration.
        </p>
        <a href="https://github.com/y4th4rthh/seat-allocation-system" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
        </div> 
    </div>
    <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
        <img src={project2} alt="Quick Resume" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
        <div className="sm:p-8 p-4">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Quick Resume</h2>
        <p className="dark:text-gray-700 text-gray-300 mb-4">
            • Quick Resume is a web-based application designed to automate the creation of resumes using Vite.js and Node.js technologies. It provides users with a streamlined experience for generating professional resumes tailored to their specific needs.
        </p>
        <a href="https://github.com/y4th4rthh/quick-resume-generator" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
        </div>
    </div>
</div>

<div className="flex flex-col justify-center lg:flex-row mt-10 gap-8">
    <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
        <img src={project3} alt="Time Guardian" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
        <div className="sm:p-8 p-4">
             <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">Time Guardian</h2>
        <p className="dark:text-gray-700 text-gray-300 mb-4">
            • Time Guardian is a comprehensive employee management system designed to streamline administrative tasks and enhance workplace efficiency using modern technologies. It offers secure work hour monitoring and fosters communication between managers and employees.
        </p>
        <a href="https://github.com/y4th4rthh/time-guardian" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
        </div>
       
    </div>
    <div className="w-full lg:w-1/3  dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
        <img src={project4} alt="I Can Compile ahh Editor" className="w-full h-64 object-cover rounded-t-2xl mb-4 border dark:border-gray-300 border-gray-700" />
        <div className="sm:p-8 p-4">
             <h2 className="text-xl font-semibold mb-4 dark:text-gray-900 text-gray-100">"I Can Compile" ahh Editor</h2>
        <p className="dark:text-gray-700 text-gray-300 mb-4">
            • Code Wizard is an innovative online platform offering comprehensive tutorials for HTML, CSS, Python, React, Node.js, and Tailwind CSS. It features a user-friendly built-in text editor, allowing users to write and test the code efficiently in one convenient space.
        </p>
        <a href="https://github.com/y4th4rthh/text-editor-app" className="dark:text-blue-500 text-blue-300 dark:hover:text-blue-700 hover:text-blue-400">View Project</a>
        </div>
       
    </div>
</div>

            </section>
        </div>
    );
}

export default Project;
