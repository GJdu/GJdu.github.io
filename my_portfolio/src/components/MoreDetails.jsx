import React from 'react'
import styles from '../style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const MoreDetails = () => {
  return (
    <div className='flex flex-row mt-4 gap-2'>
        <div className={`${styles.paragraphlink}`}>
            More details
        </div>
        <div className='flex items-center'>
            <FontAwesomeIcon icon={faAnglesRight} size='sm' className='text-teal-400'/>
        </div>
    </div>
  )
}

export default MoreDetails