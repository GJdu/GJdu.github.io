const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading: "font-sans font-bold text-zinc-800 dark:text-zinc-100 text-4xl md:text-5xl track-tight mb-6 leading-normal",
  heading2: "font-sans font-bold text-zinc-700 dark:text-zinc-200 text-[38px]",
  heading3: "font-sans font-semibold text-black dark:text-zinc-100 text-lg",
  paragraph: "font-sans font-normal text-zinc-700 dark:text-zinc-200 text-[14px] leading-relaxed text-justify",
  paragraphLight: "font-sans font-normal text-sm text-zinc-400 dark:text-500",

  paragraphlink: "font-sans font-normal text-teal-400 text-sm",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexRight: "flex justify-center items-right",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  icon: "relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 active:bg-zinc-300 focus:bg-zinc-200",
  iconimg: "w-[32px] h-[32px] hover:w-[42px] hover:h-[42px]",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
