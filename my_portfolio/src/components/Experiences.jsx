
import React from 'react';
import styles from '../style';
import { barcelona } from '../assets';
import { MoreDetails } from '../components';
  
function Experiences () {
    return (
    <div className='flex flex-col px-24 py-12 gap-16 bg-primary dark:bg-secondary'>
        <div className='flex flex-row gap-12'>
            <div className='max-w-2xl'>
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
                <div className={`${styles.paragraphLight}`}>
                    I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
                </div>
            </div>
            <div className='max-w-xs'>
                <img src={barcelona} alt="barcelona" className='rounded-2xl aspect-square rotate-6'/>
            </div>
        </div>
        <div className='flex w-3xl border-l-2 mb-12'>
            <div className={`${styles.paragraphLight} w-[200px] ml-12 mt-2`}>
                2022
            </div>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col rounded-lg hover:bg-zinc-100 px-4 py-4 max-w-xl'>
                    <div className={`${styles.heading3}`}>
                        Master’s in Computer Vision
                    </div>
                    <div className={`${styles.paragraphLight} mt-2`}>
                        Master’s program in Computer Vision at the Universidad Autónoma de
                        Barcelona. Through it, I developed a strong understanding in machine learning across a variety of computer
                        vision related topics, including 3D vision, object detection, tracking, and much more.
                    </div>
                    <MoreDetails/>
                </div>

                <div className='flex flex-col rounded-lg hover:bg-zinc-100 px-4 py-4 max-w-xl'>
                    <div className={`${styles.heading3}`}>
                        Visual Sentiment Recognition at AIWELL
                    </div>
                    <div className={`${styles.paragraphLight} mt-2`}>
                        Sponsored by the collaboration scholarships from the Ministry of Education, Spain. 
                        Experimented and developed image classification algorithm for Visual Sentiment Recognition through combining both visual information and semantic cues in a two-stream architecture.
                    </div>
                    <MoreDetails/>
                </div>
            </div>
        </div>
        <div className='flex w-3xl border-l-2'>
            <div className={`${styles.paragraphLight} w-[200px] ml-12 mt-2`}>
                2021
            </div>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col rounded-lg hover:bg-zinc-100 px-4 py-4 max-w-xl'>
                    <div className={`${styles.heading3}`}>
                        León Tourisum Project at BISITE Research Group
                    </div>
                    <div className={`${styles.paragraphLight} mt-2`}>
                        Master’s program in Computer Vision at the Universidad Autónoma de
                        Barcelona. Through it, I developed a strong understanding in machine learning across a variety of computer
                        vision related topics, including 3D vision, object detection, tracking, and much more.
                    </div>
                    <MoreDetails/>
                </div>

                <div className='flex flex-col rounded-lg hover:bg-zinc-100 px-4 py-4 max-w-xl'>
                    <div className={`${styles.heading3}`}>
                        Visual Sentiment Recognition at AIWELL
                    </div>
                    <div className={`${styles.paragraphLight} mt-2`}>
                        Sponsored by the collaboration scholarships from the Ministry of Education, Spain. 
                        Experimented and developed image classification algorithm for Visual Sentiment Recognition through combining both visual information and semantic cues in a two-stream architecture.
                    </div>
                    <MoreDetails/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Experiences;