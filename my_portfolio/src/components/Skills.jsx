import React, {useState} from 'react';

import styles from '../style';
import {skillsIcons as skill} from '../constants';

function Skills (){

const [s_img, setImage] = useState()
const [s_description, setDescription] = useState()
const [s_title, setTitle] = useState("Click the Icons!")

return (
<div className='flex flex-row justify-center bg-primary dark:bg-secondary py-12 px-6 gap-36'>
	<div>
		<div className='grid grid-cols-5 gap-3'>
			{skill.map((s, index) => (
				<button
				key={s.id}
				className={`${styles.icon}`}
				onClick={() => {setDescription(s.description); setImage(s.img), setTitle(s.title)}}
				>
					<img src={s.icon} alt={s.id} className={styles.iconimg}/>
				</button>
			))}
		</div>
	</div>
	<div className='flex-col w-[400px] border rounded-md px-6 py-6 bg-zinc-50 dark:bg-zinc-900'>
		<div>
			<img src={s_img} alt={skill.id} className='rounded-lg'/>
		</div>
		<div>
			<div className={`${styles.heading2}`}>
				{s_title}
			</div>
		</div>
		<div>
			<div className={`${styles.paragraph}`}>
				{s_description}
			</div>
		</div>
	</div>

</div>

)
}

export default Skills;
