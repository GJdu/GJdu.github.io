import { Facebook, Instagram, Linkedin, Twitter,
          DSTG, Consilium,
          cityai, leon,
          cctvCamera, tourism,
          unreal, tensorflow, pytorch, keras, python, cplusplus, colab,
          chinese, english, spanish ,
          infinite_img, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    route: "/",
  },
  {
    id: "experiences",
    title: "Experiences",
    route: "/Experiences",
  },
  {
    id: "projects",
    title: "Projects",
    route: "/Projects",
  },
  {
    id: "skills",
    title: "Skills",
    route: "/Skills",
  },
];

export const skillsIcons = [
  {
    id: "unreal",
    title: "Infinite Studio",
    icon: unreal,
    img: infinite_img,
    description: "Infinite studio is a real-time multi-spectral simulation platform powered by Unreal Engine 4 (UE4). The project explores the capabilities of modern gaming engine, allowing highly detailed simulation in a complex environment with consumer-grade hardware.",
  },
  {
    id: "tensorflow",
    icon: tensorflow,
  },
  {
    id: "pytorch",
    icon: pytorch,
  },
  {
    id: "keras",
    icon: keras,
  },
  {
    id: "python",
    icon: python,
  },
  {
    id: "cplusplus",
    icon: cplusplus,
  },
  {
    id: "colab",
    icon: colab,
  },
  {
    id: "chinese",
    icon: chinese,
  },
  {
    id: "english",
    icon: english,
  },
  {
    id: "spanish",
    icon: spanish,
  },
];

export const jobs = [
  {
      id: 'job-1',
      Logo: Consilium,
      company: 'Consilium Technology',
      position: 'Software Engineer',
      date: '2019-2020',
  },
  {
      id: 'job-2',
      Logo: DSTG,
      company: 'Defence Science and Technology Group (DSTG)',
      position: 'Undergraduate Software Engineer',
      date: '2017-2019',
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    Icon: Instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    Icon: Facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    Icon: Linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-4",
    Icon: Twitter,
    link: "https://www.linkedin.com/",
  },
];

export const experience2022 = [
  {
    id: "experience-1",
    location: "Universidad Autónoma de Barcelona, Spain",
    title: "Master’s in Computer Vision",
    description: "Master’s program in Computer Vision at the Universidad Autónoma deBarcelona. Through it, I developed a strong understanding in machine learning across a variety of computer vision related topics, including 3D vision, object detection, tracking, and much more.",
                
  },
  {
    id: "experience-2",
    location: "AIWELL Research Group - Universitat Oberta de Catalunya, Spain",
    title: "Visual Sentiment Recognition",
    description: "Sponsored by the collaboration scholarships from the Ministry of Education, Spain. Experimented and developed image classification algorithm for Visual Sentiment Recognition through combining both visual information and semantic cues in a two-stream architecture.",
                
  },
];

export const experience2021 = [
  {
    id: "experience-1",
    location: "BISITE Research Group - University of Salamanca, Spain",
    title: "León Tourisum Project",
    description: "Developed Python software pipeline to automate web scrapping for Instagram posts and performed image analysis using facial recognition and emotion classification. Developed machine learning models for detection of selfie images while utilising transfer learning techniques.",
                
  },
];

export const experience2020 = [
  {
    id: "experience-1",
    location: "Consilium Technology, Australia",
    title: "Software Development",
    description: "Developed and reviewed artefacts (specifications, models, design documentation, software code, build scripts, test documentation, etc.) corresponding to the systems/software lifecycle based on client requirements. Provided technical support to a range of company projects, including on a consulting basis with clients. Provided software engineering support in all phases of the software development lifecycle, on multiple platforms using a range of technologies, lifecycles, methodologies and languages. Assisted with project planning and estimation, in terms of meeting project schedule, quality and cost objectives.",
                
  },
];

export const experience2019 = [
  {
    id: "experience-1",
    location: "The University of Adelaide, Australia",
    title: "Bachelor of Engineering (Electrical and Electronics) (Honours) with Bachelor of Finance",
    description: "Graduated with First Class Honours with a overall GPA of 6.25/7.",
                
  },
  {
    id: "experience-2",
    location: "Austcyber, Australia",
    title: "National Missing Person’s Hackathon",
    description: "Represented the University of Adelaide team as part of Australian Cyber Week 2019. Used cyber skills to gather open source intelligence (OSINT) on long-term missing persons using only information that was publicly available on the internet to generate new leads on cases.",
                
  },
  {
    id: "experience-3",
    location: "University of Tartu, Estonia",
    title: "Cybersecurity Summer School",
    description: "something something",
                
  },
  {
    id: "experience-4",
    location: "Ravensburg-Weingarten University of Applied Sciences, Germany",
    title: "Internet of Things (IoT) Hackathon",
    description: "Performed penetration testing on IoT sensors within a multi-disciplinary team and in a time pressure scenario. Developed experience in network traffic monitoring by working through network data interception cyber exercise.",
                
  },
  {
    id: "experience-5",
    location: "Tallinn University of Technology, Estonia",
    title: "5th Interdisciplinary Cyber Research (ICR) conference 2019",
    description: "Collaboratively developed a research paper on the potential applications of blockchain in solving sustainable development goals. Actively participated in site visits (NATO, etc.) where I gained first-hand insight into the cybersecurity industry.",
                
  },
  {
    id: "experience-6",
    location: "The University of Adelaide, Australia",
    title: "Cybersecurity Research Bootcamp",
    description: "Developed research skills in the company of a group of like-minded new, early career and experienced researchers. Conducted a literature review on forensic video analysis techniques under the supervision of University lecturers. Presented innovative ideas on potential honours project to an audience.",
                
  },
];

export const experience2018 = [
  {
    id: "experience-1",
    location: "Defence Science and Technology Group (DSTG), Australia",
    title: "Industry Experience Placement",
    description: "Expanded library of assets through 3D modelling, thereby improving simulation capability. Developed commercial software plugins in C++ and Python, improving existing capabilities and adding new features. Participated in a team project involving verifying and validating infrared scene generator. Organised and ran tutorial classes for colleagues as part of knowledge transfer.",
                
  },
  {
    id: "experience-2",
    location: "The Katholieke Universiteit Leuven, Belgium",
    title: "Exchange Program",
    description: "heavy drinking",
                
  },
];

export const projects = [
  {
    id: "project-1",
    icon: cctvCamera,
    image: cityai,
    title: "CVPR AI City Challenge",
    link: "github.com",
    link_address: "https://github.com/mcv-m6-video/mcv-m6-2022-team5",
    description: "City-scale multi-camera vehicle tracking: Keep track of and differentiate between moving vehicles appearing in sequences taken from static cameras. Establish correspondences between identified tracks across different cameras.",
  },
  {
    id: "project-2",
    icon: tourism,
    image: leon,
    title: "León Tourism Project",
    link: "github.com",
    link_address: "https://github.com/GJdu/Tourism-Project",
    description: "Developed Python software pipeline to automate web scrapping for Instagram posts and performed image analysis using facial recognition and emotion classification. Developed machine learning models for detection of selfie images while utilising transfer learning techniques.",
  },
];