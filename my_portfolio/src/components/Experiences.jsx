
import React from 'react';
import styles from '../style';
import { barcelona } from '../assets';
import { experience2022, experience2021, experience2020, experience2019, experience2018 } from '../constants';
import { MoreDetails, CardExperienceLayout } from '../components';
  
function Experiences () {
    return (
    <div className='flex flex-col px-24 py-12 gap-12 bg-primary dark:bg-secondary'>
        <div className='flex flex-row gap-12 justify-between'>
            <div className='max-w-xl'>
                <div className={`${styles.heading} mb-6 leading-normal`}>
                    <div>
                        What I have done,
                    </div>
                    <div>
                        Things I have loved,
                    </div>
                    <div>
                        And places I have been.
                    </div>
                </div>
                <div className={`${styles.paragraph}`}>
                    I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
                </div>
            </div>
            <div className='max-w-xs'>
                <img src={barcelona} alt="barcelona" className='object-center rounded-2xl aspect-square rotate-6'/>
            </div>
        </div>
        <CardExperienceLayout year={"2022"} props={experience2022} />
        <CardExperienceLayout year={"2021"} props={experience2021} />
        <CardExperienceLayout year={"2020"} props={experience2020} />
        <CardExperienceLayout year={"2019"} props={experience2019} />
        <CardExperienceLayout year={"2018"} props={experience2018} />
    </div>
    )
}
export default Experiences;