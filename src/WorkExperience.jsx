import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () => {
  return (
    <div className='experience dark:bg-white bg-gray-900  dark:text-black text-gray-100 pt-4 sm:pt-16 overflow-x-hidden pb-4' id='experience'>
      <div className='pt-12 sm:px-16 text-center mb-6'>
        <p className='font-semibold text-lg dark:text-gray-900 text-gray-100'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 dark:text-black text-gray-100'>Work Experience.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        <VerticalTimelineElement
          className="relative vertical-timeline-element--work"
          date="Jan 2020 - Present"
          iconStyle={{ background: '#000000' }}
          icon={
            <a className='flex justify-center items-center w-full h-full' href='https://techcorp.com' target='_blank' rel="noopener noreferrer">
              <img
                src='https://via.placeholder.com/150'
                alt='Tech Corp'
                className='w-3/5 h-3/5 object-contain'
              />
            </a>
          }
        >
          <div className='p-4  dark:bg-white bg-gray-800 dark:text-black text-gray-100'>
            <h3 className='text-2xl font-bold'>Software Engineer</h3>
            <p className='text-lg font-semibold'>Tech Corp</p>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              <li className='text-sm'>Developed new features for the main product.</li>
              <li className='text-sm'>Led the migration to a new tech stack.</li>
              <li className='text-sm'>Collaborated with cross-functional teams.</li>
            </ul>
          </div>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="relative vertical-timeline-element--work"
          date="Jun 2018 - Dec 2019"
          iconStyle={{ background: '#000000' }} 
          icon={
            <a className='flex justify-center items-center w-full h-full' href='https://websolutions.com' target='_blank' rel="noopener noreferrer">
              <img
                src='https://via.placeholder.com/150'
                alt='Web Solutions'
                className='w-3/5 h-3/5 object-contain'
              />
            </a>
          }
        >
          <div className='p-4  dark:bg-white bg-gray-800 dark:text-black text-gray-100'>
            <h3 className='text-2xl font-bold'>Junior Developer</h3>
            <p className='text-lg font-semibold'>Web Solutions</p>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              <li className='text-sm'>Assisted in the development of client websites.</li>
              <li className='text-sm'>Optimized performance for existing applications.</li>
              <li className='text-sm'>Provided support for troubleshooting issues.</li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="relative vertical-timeline-element--work"
          date="Jun 2018 - Dec 2019"
          iconStyle={{ background: '#000000' }} 
          icon={
            <a className='flex justify-center items-center w-full h-full' href='https://websolutions.com' target='_blank' rel="noopener noreferrer">
              <img
                src='https://via.placeholder.com/150'
                alt='Web Solutions'
                className='w-3/5 h-3/5 object-contain'
              />
            </a>
          }
        >
          <div className='p-4  dark:bg-white bg-gray-800 dark:text-black text-gray-100'>
            <h3 className='text-2xl font-bold'>Junior Developer</h3>
            <p className='text-lg font-semibold'>Web Solutions</p>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              <li className='text-sm'>Assisted in the development of client websites.</li>
              <li className='text-sm'>Optimized performance for existing applications.</li>
              <li className='text-sm'>Provided support for troubleshooting issues.</li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      
      <style jsx>{`
        .vertical-timeline::before {
          background: #e5e7eb; /* bg-gray-100 */
        }
        .dark .vertical-timeline::before {
          background: #f3f4f6 ; /* black for dark mode */
        }
        .vertical-timeline-element-content-arrow {
          border-right-color: #e5e7eb; /* bg-gray-100 */
        }
        .dark .vertical-timeline-element-content-arrow {
          border-right-color: #f3f4f6; /* black for dark mode */
        }
        .vertical-timeline-element-content {
          
          background: #1f2937; /* bg-gray-800 */
        }
        .dark .vertical-timeline-element-content {
          background: #f3f4f6; /* bg-gray-200 */
        }

      `}</style>
    </div>
  );
}

export default WorkExperience;
