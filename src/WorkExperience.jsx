import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from 'react-icons/fa';

const WorkExperience = () => {
  return (
    <div className='experience relative dark:bg-white bg-gray-900 dark:text-black text-gray-100 pt-8 sm:pt-20 overflow-hidden pb-12 font-rubik' id='experience'>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p className='font-semibold text-lg dark:text-gray-700 text-blue-300 mb-2'>MY JOURNEY SO FAR</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 dark:text-black text-white'>
            Work <span className='text-blue-400 dark:text-blue-600'>Experience</span>
          </h2>
          <div className='w-24 h-1 bg-blue-400 dark:bg-blue-600 mx-auto mt-4'></div>
        </div>

        <VerticalTimeline className='mt-9'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<span className="font-medium text-blue-400 dark:text-blue-600">Jan 2025 - Present</span>}
            iconStyle={{ 
              background: 'linear-gradient(135deg, #2563eb, #1e40af)',
              boxShadow: '0 0 0 4px #ffffff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center' 
            }}
            contentStyle={{
              background: 'rgba(31, 41, 55, 0.8)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              borderRadius: '0.75rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(31, 41, 55, 0.8)' }}
            iconClassName="hover:scale-110 transition-transform duration-300"
            icon={
              <a className='w-full h-full flex items-center justify-center' href='https://www.consultanubhav.com/' target='_blank' rel="noopener noreferrer">
                <img
                  src='./ca-black.png'
                  alt='CA'
                  className='w-3/5 h-3/5 object-contain filter brightness-0 invert'
                />
              </a>
            }
          >
            <div className='p-6 text-gray-100 dark:text-gray-100 group transition-all duration-300 hover:translate-y-[-4px]'>
              <h3 className='text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300'>Web Developer (Intern)</h3>
              <p className='text-lg font-semibold text-blue-300'>Tech Stack: MERN, Tailwind CSS</p>
              <ul className='mt-5 space-y-3'>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 mt-1'>•</span>
                  <span>Worked as a full stack developer on a product GPT2DOCX.</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 mt-1'>•</span>
                  <span>Led the migration to a new tech stack.</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 mt-1'>•</span>
                  <span>Collaborated with team for product enhancement.</span>
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Add the star at the end */}
          <VerticalTimelineElement
            iconStyle={{ 
              background: 'linear-gradient(135deg, #2563eb, #1e40af)',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 40px) scale(1.05);
          }
        }
        
        .animate-blob {
          animation: blob 8s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Dark mode adjustments */
        .dark .vertical-timeline::before {
          background: #e5e7eb;
        }
        
        .dark .vertical-timeline-element-content {
          background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(243, 244, 246, 0.8));
          color: #111827;
        }
        
        .dark .vertical-timeline-element-content-arrow {
          border-right-color: rgba(243, 244, 246, 0.8);
        }
        
        /* Light mode (dark theme) adjustments */
        .vertical-timeline::before {
          background: #374151;
        }
      `}</style>
    </div>
  );
}

export default WorkExperience;
