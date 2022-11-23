import React from 'react'
import { jobs } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import CardLayout from './CardLayout'

const JobCard = () => {
  return (
    <CardLayout icon={faBriefcase} title='Work'>
        <ul>
            {jobs.map((job, index) => (
                <li
                    key={job.id}
                >
                    <div className='flex items-center my-4'>
                        <div className='w-16 h-8 mr-4 relative'>
                            <img
                                alt='logo' 
                                objectfit='contain'
                                layout='fill'
                                src={job.logo.src}
                            />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-md font-semibold'>
                                {job.company}
                            </h1>
                            <div className='flex justify-between gap-8'>
                                <p className='flex-1 text-s font-thin'>{job.position}</p>
                                <p className='flex-0 text-s font-thin w-24'>{job.date}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </CardLayout>
  )
}

export default JobCard