import React from 'react'
import { jobs } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import CardLayout from './CardLayout'

const JobCard = () => {
  return (
    <CardLayout icon={faBriefcase} title='Work'>
        <ul>
            {jobs.map(({id, Logo, company, date, position}) => (
                <li
                    key={id}
                >
                    <div className='flex items-center my-4'>
                        <div className='w-16 h-8 mr-4 relative'>
                            <Logo fill className='fill-black dark:fill-white'></Logo>
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-black dark:text-white text-sm font-semibold pr-36'>
                                {company}
                            </h1>
                            <div className='flex justify-between gap-8'>
                                <p className='flex-1 text-zinc-400 text-xs'>{position}</p>
                                <p className='flex-0 text-zinc-400 text-xs w-24'>{date}</p>
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