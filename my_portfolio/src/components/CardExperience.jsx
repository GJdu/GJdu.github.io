import React from 'react'

import styles from '../style';
import { MoreDetails } from '../components';

const CardExperience = (props) => {
  return (
    <div className='flex flex-col rounded-lg hover:bg-zinc-100 hover:dark:bg-zinc-800 px-4 py-4 max-w-xl'>
        <div className={`${styles.paragraphLight} border-l-2 border-zinc-200 pl-4 mb-2`}>
            {props.location}
        </div>
        <div className={`${styles.heading3}`}>
            {props.title}
        </div>
        <div className={`${styles.paragraph} mt-2`}>
            {props.description}
        </div>
        <MoreDetails/>
    </div>
  )
}

export default CardExperience