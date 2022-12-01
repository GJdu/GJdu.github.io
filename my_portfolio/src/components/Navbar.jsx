import React, {useState} from 'react';

import {close, portrait, menu } from '../assets';
import {navLinks} from '../constants';
import { DarkModeSwitcher } from '../components';

import { Link, useLocation } from 'react-router-dom';

function Navbar () {

    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    return (
        <nav className='w-3/4 flex py-6 justify-between items-center mx-auto navbar'>
            <div></div>

            <ul className='list-none sm:flex hidden justify-center items-center
            rounded-full bg-dimWhite dark:bg-zinc-800 sm:shadow-lg sm:w-80 sm:h-10'>
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
                            {nav.route === location.pathname ? 
                                <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                                : <span></span>
                        }
                        </Link>
                        
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end item-center'>
                <img 
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} 
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px]
                        ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} 
                        text-black dark:text-white`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className='list-none sm:flex hidden justify-center items-center
            rounded-full bg-dimWhite dark:bg-zinc-800 sm:shadow-lg sm:w-10 sm:h-10' 
            >
                <div className='sm:flex justify-end item-center'>
                    <DarkModeSwitcher/>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar