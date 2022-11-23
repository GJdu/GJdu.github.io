import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardLayout = (props) => {
  return (
    <div className='p-4 border rounded-md'>
        <div className='flex items-center gap-4 mb-4'>
            <FontAwesomeIcon icon={props.icon} size='lg'/>
            <h1 className='text-s font-semibold'>
                {props.title}
            </h1>
        </div>
        {props.children}
    </div>
  )
}

export default CardLayout