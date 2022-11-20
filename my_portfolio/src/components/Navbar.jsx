import React, {useState} from 'react';

import {close, portrait, menu } from '../assets';
import {navLinks} from '../constants'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleDark, setToggleDark] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={portrait} alt="a1670081.jpg" className='w-[48px] h-[48px] rounded-full' />
            <ul className='list-none sm:flex hidden justify-center items-center
            rounded-full bg-dimWhite dark:bg-zinc-800 sm:shadow-lg sm:w-80 sm:h-10'>
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-sans hover:text-teal-400 font-bold cursor-pointer text-[12px]
                    ${index === navLinks.length -1 ? 'mr-0' : 'mr-8'} 
                    text-black dark:text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
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
            rounded-full bg-dimWhite dark:bg-zinc-800 sm:shadow-lg sm:w-10 sm:h-10' onClick={() => setToggleDark((prev) => !prev)}>
                <div className='sm:flex justify-end item-center'>
                    {toggleDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} style={{color:"teal"}}/> }
                </div>
            </ul>
        </nav>
    )
}

export default Navbar