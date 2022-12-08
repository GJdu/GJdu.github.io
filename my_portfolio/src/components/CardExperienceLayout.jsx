import React from 'react'
import styles from '../style'
import CardExperience from './CardExperience'

const CardExperienceLayout = ({year, props}) => {
  return (
    <div className='flex max-w-3xl border-l-2 mb-12'>
            <div className={`${styles.paragraphLight} w-[100px] md:w-[200px] ml-4 md:ml-12 mt-2`}>
                {year}
            </div>
            <div className='flex flex-col gap-6'>
                {props.map(({location, title, description}) => (
                    <CardExperience 
                    location={location}
                    title={title}
                    description={description}
                    />
                ))}
            </div>
        </div>
  )
}

export default CardExperienceLayout