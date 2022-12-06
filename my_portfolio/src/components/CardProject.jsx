import React from 'react'
import styles from '../style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';

const CardProject = (props) => {
  return (
    <div className='flex flex-row gap-12 hover:bg-zinc-100 hover:dark:bg-zinc-800 rounded-lg px-4 py-4 group'>
        <div className='flex flex-col max-w-xl'>
            <div>
                <img src={props.icon} alt="" className='w-[32px]'/>
            </div>
            <div className={`${styles.heading3} mt-4`}>
                {props.title}
            </div>
            <div className={`${styles.paragraph} mt-2`}>
                {props.description}
            </div>
            <div className='flex'>
                <a href={props.link_address}>
                    <div className={`flex flex-row ${styles.paragraph} gap-2 mt-2 group-hover:text-teal-400`}>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faLink} size='lg' className='text-black dark:text-white group-hover:text-teal-400'/>
                        </div>
                        {props.link}
                    </div>
                </a>
            </div>

        </div>
        <div>
            <img src={props.image} alt={props.id} className="max-w-xs aspect-video object-center rounded-xl"/>
        </div>
    </div>

  )
}

export default CardProject