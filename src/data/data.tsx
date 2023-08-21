import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import nexusgrove from '../images/nexusgrove.png';
import streamify from '../images/streamify.png';
import unichat from '../images/unichat.png';
import glance from '../images/glance.png';
import profilepic from '../images/avatar.jpg';
import resume from '../images/avatar.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kapil Singh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a student with a keen interest in <strong className='text-stone-100'>Full Stack Development</strong>. On my portfolio site, you can discover my passion for creating <strong className='text-stone-100'>modern, user-centric</strong> experiences through innovative projects as I grow into a skilled <strong className='text-stone-100'>Full Stack Developer</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `${resume}`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate Full Stack Developer proficient in MERN stack and Next.js. Committed to delivering seamless user experiences through innovative web applications. Let's shape the future together, one line of code at a time!`,
  aboutItems: [
    { label: 'Location', text: 'Kurukshetra, Haryana', Icon: MapIcon },
    { label: 'Age', text: '22', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Indian', Icon: FlagIcon },
    { label: 'Interests', text: 'Cricket, Sci-Fi Shows', Icon: SparklesIcon },
    { label: 'Study', text: 'NIT Kurukshetra', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React.js',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Express.js',
        level: 9,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'DA with Python',
        level: 9,
      },
      {
        name: 'Power BI',
        level: 8,
      },
      {
        name: 'Tableau',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nexusgrove',
    description: 'A robust and visually captivating e-commerce website with user-centric design, and secure transaction handling.',
    url: 'https://nexusgrove.vercel.app',
    image: nexusgrove,
  },
  {
    title: 'Streamify',
    description: 'An immersive video streaming platform delivering a seamless and captivating user experience',
    url: 'https://streamify-ui.onrender.com',
    image: streamify,
  },
  {
    title: 'UniChat',
    description: 'Full - fledged social media app, encompassing real-time messaging, group chat, media-sharing and much more.',
    url: 'https://unichat-client.onrender.com',
    image: unichat,
  },
  {
    title: 'Glance',
    description: 'An immersive video sharing application with excellent UI/UX design and innovative algorithms.',
    url: 'https://github.com/kapilsinghbaghel24/Glance',
    image: glance,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: streamify,
  },

];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'These are my contact details.',
  items: [
    {
      type: ContactType.Email,
      text: 'kapilsinghbaghel24@gmail.com',
      href: 'mailto:kapilsinghbaghel24@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'NIT Kurukshetra, Haryana, India',
      href: 'https://www.google.com/maps/place/NIT,+Thanesar,+Haryana+136119/@29.9449958,76.8130607,15.48z/data=!4m6!3m5!1s0x390e3f51bab18cb5:0x96200205143e35f6!8m2!3d29.9451403!4d76.8173138!16s%2Fg%2F1ptxzkjn9?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: 'kapil_baghel___',
      href: 'https://www.instagram.com/kapil_baghel___/',
    },
    {
      type: ContactType.Github,
      text: 'kapilsinghbaghel24',
      href: 'https://github.com/kapilsinghbaghel24',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/kapilsinghbaghel24' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kapilsinghbaghel24/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kapil_baghel___/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Kapil_Singh_24/' },
];

