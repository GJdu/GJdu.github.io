import React from 'react';
import styles from '../style';

import {CardProject} from "../components"
import { projects } from "../constants"

function Projects (){
return (
<div className='flex flex-col px-1 md:px-24 py-12 gap-12 bg-primary dark:bg-secondary'>
        <div className='flex flex-row gap-12 justify-between'>
            <div className='max-w-xl'>
                <div className={`${styles.heading}`}>
                    <div>
                        Projects I have worked on
                    </div>
                </div>
                <div className={`${styles.paragraph}`}>
					I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
                </div>
            </div>
        </div>
		<div className='flex border-l-2 mb-12'>
            <div className='flex flex-col gap-6 ml-2 md:ml-12'>
                {projects.map(({id, image, title, description, link, link_address, icon}) => (
                    <CardProject 
                    id={id}
					icon={icon}
					image={image}
					link={link}
					link_address={link_address}
                    title={title}
                    description={description}
                    />
                ))}
            </div>
        </div>
    </div>
)
}

export default Projects;
