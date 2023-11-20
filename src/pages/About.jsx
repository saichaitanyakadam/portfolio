import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { EducationDetails,PersonalDetails } from '../constants/AppConstants'
import { FaLinkedin,FaGithubSquare } from "react-icons/fa";

const About = () => {
  const {nightMode}=useContext(AppContext)
  return (
    <div className='flex flex-col gap-5 w-full'>
    <div className={`${nightMode&& "bg-[#333]"} flex flex-col p-5 rounded-lg lg:p-10 shadow-lg border border-gray-200 w-full`}>
      <div className='mb-5'>
        <h2 className='text-4xl font-serif mb-2'>
          Personal Details
        </h2>
        <hr className='border-gray-200' />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2'>
          {PersonalDetails.map(item=>(
            <div key={item.id} className='w-full'>
            <p className='font-[300] text-md mb-1'>{item.label}</p>
            <p className='border border-gray-500 rounded-md py-2 px-5 overflow-x-auto'>{item.content}</p>
          </div>
          ))}
        </div> 
      </div>
    </div>
    <div className={`${nightMode&& "bg-[#333]"} flex flex-col p-5 rounded-lg lg:p-10 shadow-lg w-full border border-gray-200`}>
    <div>
        <h2 className='text-4xl font-serif mb-2'>
          Education
        </h2>
        <hr className='border-gray-200' />
        <ul className='flex flex-col gap-3 mt-2'>
          {EducationDetails.map(education=>(
            <li key={education.id}>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl flex-2'>{education.institution}</h3>
                <p className='flex-1 text-right'>{education.from} <span>-</span>{education.to}</p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='text-m font-[200]'>
                  <p>{education.course}</p>
                  <p className='font-[400]'>{education.department}</p>
                </div>
                {education.score && 
                <div className='text-right text-sm font-[200]'>
                  <p>{education.gradeSystem}</p>
                  <p>{education.score}/{education.overallScore}</p>
                </div>}
                
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className='flex justify-center gap-5 text-5xl '>
      <a href="http://linkedin.com/in/sai-chaitanya-kadam-784b12255" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-blue-400'/>
      </a>
      <a href="https://github.com/saichaitanyakadam" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare />
      </a> 
    </div>
    </div>

  )
}

export default About