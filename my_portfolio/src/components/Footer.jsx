import React from 'react'

import {navLinks} from '../constants';
import styles from '../style';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();

  return (
    <div className='flex items-center pt-10 pb-16 border-t'>
        <div className='flex-1 flex justify-between'>
            <div className='flex gap-4'>
              <ul className='list-none sm:flex hidden justify-center items-center
               bg-primary dark:bg-secondary sm:w-80 sm:h-10'>
                  {navLinks.map((nav, index) => (
                      <li
                      key={nav.id}
                      className={`font-sans hover:text-teal-400 dark:hover:text-teal-400 font-bold cursor-pointer text-[12px]
                      ${index === navLinks.length -1 ? 'mr-0' : 'mr-8'}
                      ${nav.route === location.pathname ? 'text-teal-400' : 'text-black dark:text-white' } 
                      relative py-2.5`}
                      >
                          <Link to={nav.route} className="block">
                              {nav.title}
                          </Link>
                          
                      </li>
                  ))}
              </ul>
            </div>
            <div className={`${styles.paragraphLight}`}>© 2022 Brian Du. All rights reserved.</div>
        </div>
       
    </div>
  )
}

export default Footer