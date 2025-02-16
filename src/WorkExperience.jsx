// //Not used but may add it later

// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// const WorkExperience = () => {
//   return (
//     <div className='experience dark:bg-white bg-gray-900  dark:text-black text-gray-100 pt-4 sm:pt-16 overflow-x-hidden pb-4 font-rubik' id='experience'>
//       <div className='pt-12 sm:px-16 text-center mb-6'>
//         <p className='font-semibold text-lg dark:text-gray-900 text-gray-100'>MY JOURNEY SO FAR.</p>
//         <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 dark:text-black text-gray-100'>Work Experience.</h2>
//       </div>
//       <VerticalTimeline className='mt-9'>
//         <VerticalTimelineElement
//           className="relative vertical-timeline-element--work"
//           date="Jan 2025 - Present"
//           iconStyle={{ background: '#111111',overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center' }}
//           icon={
//             <a className='' href='https://www.consultanubhav.com/' target='_blank' rel="noopener noreferrer">
//               <img
//                 src='./ca-black.png'
//                 alt='CA'
//                 className=''
//               />
//             </a>
//           }
//         >
//           <div className='p-4  dark:bg-white bg-gray-800 dark:text-black text-gray-100'>
//             <h3 className='text-2xl font-bold'>Web Developer (Intern)</h3>
//             <p className='text-lg font-semibold'>Tech Stack: MERN, Tailwind CSS</p>
//             <ul className='mt-5 list-disc ml-5 space-y-2'>
//               <li className='text-sm'>Worked as a full stack developer on a product GPT2DOCX.</li>
//               <li className='text-sm'>Led the migration to a new tech stack.</li>
//               <li className='text-sm'>Collaborated with team for product enhancement.</li>
//             </ul>
//           </div>
//         </VerticalTimelineElement>
        
//         {/* <VerticalTimelineElement
//           className="relative vertical-timeline-element--work"
//           date="Jun 2018 - Dec 2019"
//           iconStyle={{ background: '#000000' }} 
//           icon={
//             <a className='flex justify-center items-center w-full h-full' href='https://websolutions.com' target='_blank' rel="noopener noreferrer">
//               <img
//                 src='https://via.placeholder.com/150'
//                 alt='Web Solutions'
//                 className='w-3/5 h-3/5 object-contain'
//               />
//             </a>
//           }
//         >
//           <div className='p-4  dark:bg-white bg-gray-800 dark:text-black text-gray-100'>
//             <h3 className='text-2xl font-bold'>Junior Developer</h3>
//             <p className='text-lg font-semibold'>Tech</p>
//             <ul className='mt-5 list-disc ml-5 space-y-2'>
//               <li className='text-sm'>Assisted in the development of client websites.</li>
//               <li className='text-sm'>Optimized performance for existing applications.</li>
//               <li className='text-sm'>Provided support for troubleshooting issues.</li>
//             </ul>
//           </div>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="relative vertical-timeline-element--work"
//           date="Jun 2018 - Dec 2019"
//           iconStyle={{ background: '#000000' }} 
//           icon={
//             <a className='flex justify-center items-center w-full h-full' href='https://websolutions.com' target='_blank' rel="noopener noreferrer">
//               <img
//                 src='https://via.placeholder.com/150'
//                 alt='Web Solutions'
//                 className='w-3/5 h-3/5 object-contain'
//               />
//             </a>
//           }
//         >
//           <div className='p-4  dark:bg-white bg-gray-800 dark:text-black text-gray-100'>
//             <h3 className='text-2xl font-bold'>Junior Developer</h3>
//             <p className='text-lg font-semibold'>Tech</p>
//             <ul className='mt-5 list-disc ml-5 space-y-2'>
//               <li className='text-sm'>Assisted in the development of client websites.</li>
//               <li className='text-sm'>Optimized performance for existing applications.</li>
//               <li className='text-sm'>Provided support for troubleshooting issues.</li>
//             </ul>
//           </div>
//         </VerticalTimelineElement> */}
//       </VerticalTimeline>

      
//       <style jsx>{`
//         .vertical-timeline::before {
//           background: #e5e7eb; /* bg-gray-100 */
//         }
//         .dark .vertical-timeline::before {
//           background: #f3f4f6 ; /* black for dark mode */
//         }
//         .vertical-timeline-element-content-arrow {
//           border-right-color: #e5e7eb; /* bg-gray-100 */
//         }
//         .dark .vertical-timeline-element-content-arrow {
//           border-right-color: #f3f4f6; /* black for dark mode */
//         }
//         .vertical-timeline-element-content {
          
//           background: #1f2937; /* bg-gray-800 */
//         }
//         .dark .vertical-timeline-element-content {
//           background: #f3f4f6; /* bg-gray-200 */
//         }

//       `}</style>
//     </div>
//   );
// }

// export default WorkExperience;

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () => {
  return (
    <div className='experience relative dark:bg-white bg-gray-900 dark:text-black text-gray-100 pt-8 sm:pt-20 overflow-hidden pb-12 font-rubik' id='experience'>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p className='font-semibold text-lg dark:text-gray-800 text-gray-300 mb-2'>My Journey So Far</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 dark:text-gray-800 text-white'>
            Work Experience
          </h2>
        </div>

        <VerticalTimeline className='mt-9'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<span className="font-medium dark:text-gray-800 text-gray-200">Jan 2025 - Present</span>}
            iconStyle={{ 
              background: '#111111',
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
                  className='w-3/5 h-3/5 object-contain '
                />
              </a>
            }
          >
            <div className='p-6 text-gray-100 dark:text-gray-100 group transition-all duration-300 hover:translate-y-[-4px]'>
              <h3 className='text-2xl font-bold transition-colors duration-300'>Web Developer (Intern)</h3>
              <p className='text-lg font-semibold '>Tech Stack: MERN, Tailwind CSS</p>
              <ul className='mt-5 space-y-3'>
                <li className='flex items-start'>
                  <span className=' mr-2 mt-1'>•</span>
                  <span>Worked as a full stack developer on a product GPT2DOCX.</span>
                </li>
                <li className='flex items-start'>
                  <span className=' mr-2 mt-1'>•</span>
                  <span>Led the migration to a new tech stack.</span>
                </li>
                <li className='flex items-start'>
                  <span className=' mr-2 mt-1'>•</span>
                  <span>Collaborated with team for product enhancement.</span>
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Add the star at the end */}
        
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
          background: #e5e7eb;
        }
        
        .dark .vertical-timeline-element-content {
          background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(243, 244, 246, 0.8));
          color: #111827;
        
        .dark .vertical-timeline-element-content {
          background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(243, 244, 246, 0.8));
          color: #111827;
        }
        
        
        .dark .vertical-timeline-element-content-arrow {
          border-right-color: rgba(243, 244, 246, 0.8);
          border-right-color: rgba(243, 244, 246, 0.8);
        }
        
        /* Light mode (dark theme) adjustments */
        .vertical-timeline::before {
          background: #374151;
        
        /* Light mode (dark theme) adjustments */
        .vertical-timeline::before {
          background: #374151;
        }
      `}</style>
    </div>
  );
}

export default WorkExperience;
