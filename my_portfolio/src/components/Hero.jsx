import styles from "../style";
import React from 'react';
import { portrait } from "../assets";
import { socialMedia } from "../constants";
import { JobCard } from '../components';

const Hero = () => {
  return (
    <section id="hero" className={`flex md:flex-row flex-col-reverse py-2`}>
      <div className={`flex item-start flex-col xl:px-0 sm:px-16 px-6 py-12`}>
        <div className="flex flex-col items-left w-full">
          <h1 className={`"flex-1" ${styles.heading}`}>
            Hi, I am Brian Du.
          </h1>
          <p className="flex-1 font-sans font-semibold max-w-[550px] ss:text-[28px] text-[22px] text-black dark:text-white ss:leading-normal leading-normal">
            An aspiring young computer vision scientist looking to transform the world with AI solutions.<br className="sm:block hidden" />{" "}
          </p>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I'm a recent Master graduate in Computer Vision at the Universitat Autònoma de Barcelona. 
          During my stay in Spain, I worked as a researcher at the Artificial Intelligence for Human Well-being Faculties (AIWELL) focusing on Visual Sentiment Recognition.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I have been incredibly fortunate to work as a software engineer for over 2 years with both Defence Science and Technology Group (DSTG) and Consilium Technology, 
        as a result, I have developed strong programming skills across multiple platforms.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          My areas of interest include: Computer Vision, Data Analysis, Software development
        </p>
      </div>

      <div className={`flex flex-col my-10 gap-y-16 mx-8 px-2`}>
        <div className="flex justify-center">
          <div className="flex flex-col bg-zinc-100 dark:bg-zinc-800 shadow-lg w-[400px] shrink">
              <div className="flex justify-center py-4">
                <img src={portrait} alt="portrait" className="rounded-full max-w-[200px] max-h-[200px]"/>
              </div>
              <div className="flex justify-center text-black dark:text-white font-bold text-3xl">
                  Brian
              </div>
              <div className="flex justify-center text-black dark:text-white font-bold text-3xl">
                  Du
              </div>
              <div className="flex justify-center py-4">
                <div className="h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 w-[60px]"></div>
              </div>
              <div className="flex justify-center font-poppins text-zinc-600 dark:text-zinc-300 font-semibold text-lg mb-4">
                  Machine Learning Engineer
              </div>
              <div className="flex flex-row justify-center gap-x-3 py-4 bg-white dark:bg-zinc-700">
                {socialMedia.map(({id, Icon, link}) => (
                  <Icon fill className='fill-black dark:fill-white cursor-pointer'></Icon>
                ))}
              </div>
            </div>
        </div>
        <div>
          <JobCard/>
        </div>
      </div>
    </section>
  );
};

export default Hero;