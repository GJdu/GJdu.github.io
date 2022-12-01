import React from 'react';
import styles from '../style';

import {Hero} from "."

function About () {
    return (
      <div className='bg-primary dark:bg-secondary w-full overflow-hidden'>
      <div className={`bg-primary dark:bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
    </div>
      )
}
  
export default About;