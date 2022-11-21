import styles from "../style";
import { vball01 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-8`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col justify-between items-left w-full">
          <h1 className="flex-1 font-sans font-semibold ss:text-[78px] text-[48px] text-black dark:text-white ss:leading-relaxed leading-relaxed">
            Hi, I am Brian Du. <br className="sm:block hidden" />{" "}
          </h1>
          <p className="flex-1 font-sans font-semibold ss:text-[28px] text-[22px] text-black dark:text-white ss:leading-normal leading-normal">
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

      <div className={`flex-1 flex ${styles.flexCenter} md:my-10 my-10 relative`}>
        <img src={vball01} alt="billing" className="aspect-square border-0 rounded-lg rotate-6 w-4/5" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;