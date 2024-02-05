import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Carlos Marí Noguera",
  initials: "CMN",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
    "Electrical and Computer Engineering student focusing on ML",
  summary:
    "Currently doing research on the use of Reinforcement Learning for network optimization at UT Austin, also working on creating a Federated Learning framework as a senior design project. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/97597629?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "carlosmari@utexas.edu",
    tel: "+34636974742 \ +1 (512) 550-8037",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/CarlosMari",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/carlos-marí-noguera",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/_carlosmn",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Pontifica de Comillas ICAI",
      degree: "Bachelor's Degree in Telecommunication Technologies Engineering",
      gpa: "7.5",
      start: "2020",
      end: "2024",
    },
    {
      school: "The University of Texas at Austin",
      degree: "Bachelor's Degree in Electrical and Computer Engineering (Exchange)",
      gpa: "3.9292",
      start: "2023",
      end: "2024",
    },
  ],
  work: [

    {
      company: "Tower Consultores",
      link: "https://www.towerconsultores.com/en/home/",
      badges: [],
      title: "Summer Intern",
      logo: ParabolLogo,
      start: "Jun 2023",
      end: "July 2023",
      description:
        "Worked on full stack development and business intelligence",
    },
    {
      company: "Universidad Pontificia de Comillas ICAI",
      link: "https://ucomillas.edu/",
      badges: [],
      title: "Collaborator Student",
      logo: JojoMobileLogo,
      start: "Sept 2022",
      end: "May 2023",
      description:
        "Worked on the development of internal tools to aid the universities international department",
    },
  ],
  skills: [
    "Python",
    "Pytorch",
    "Tensorflow",
    "C",
    "Java",
  ],
  projects: [
    {
      title: "Diffusion Model from Scratch",
      techStack: [
        "PyTorch",
        "Python",
      ],
      description: "A diffusion model built from scratch to generate Movie Posters",
      logo: ConsultlyLogo,
      link: {
        label: "MovieGen",
        href: "https://github.com/anforsm/movie-diffusion/",
      },
    },
 
   ],
} as const;
