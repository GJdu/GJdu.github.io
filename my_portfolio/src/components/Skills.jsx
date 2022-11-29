import React from 'react';

import styles from '../style';
import {skillsIcons} from '../constants';

function Skills (){
return (
<div className='flex justify-center bg-primary dark:bg-secondary py-12'>
		<div className='grid grid-cols-5 gap-2'>
			{skillsIcons.map((skill, index) => (
				<div
				key={skill.id}
				className={`${styles.icon}`}
				>
					<img src={skill.icon} alt={skill.id} className={styles.iconimg}/>
				</div>
			))}
	</div>

</div>

)
}

export default Skills;
