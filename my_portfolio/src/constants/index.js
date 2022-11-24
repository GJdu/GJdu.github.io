import { facebook, instagram, linkedin, DSTG } from "../assets";
import { ReactComponent as Consilium } from "../assets/consilium-logo-white.svg";



export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "about",
    title: "About",
    route: "/About",
  },
  {
    id: "projects",
    title: "Projects",
    route: "/Projects",
  },
  {
    id: "contacts",
    title: "Contacts",
    route: "/Contacts",
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
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];