import {
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Carlos Marí Noguera",
  initials: "CMN",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
    "Electrical and Computer Engineering student",
  summary:
    "Currently doing research on the use of Reinforcement Learning for network optimization at UT Austin, also working on creating a Federated Learning framework as a senior design project. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/97597629?v=4",
  personalWebsiteUrl: "carlosmari.com",
  contact: {
    email: "carlosmari@utexas.edu",
    
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
      gpa: "Grade: 7.5",
      coursework: "Coursework: Algorithms, Digital Systems I, Digital Systems II, Software Engineering, Signals and Systems, Communication Theory, Radiation and Propagation, Electromagnetic Fields",
      start: "2020",
      end: "2024",
    },
    {
      school: "The University of Texas at Austin",
      degree: "Bachelor's Degree in Electrical and Computer Engineering (Exchange)",
      gpa: "GPA: 3.9292",
      coursework: "Corsework: Digital Image Processing, Edge AI, Reinforcement Learning, Probability and Randomm Processes",
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
      link: "https://comillas.edu/",
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
    "VHDL",
    "JavaScript"
  ],
  projects: [
    {
      title: "Diffusion Model from Scratch",
      techStack: [
        "PyTorch",
        "Python",
      ],
      description: "Developed a diffusion model based on the UNet architecture from scratch to generate movie posters.",
      logo: ConsultlyLogo,
      link: {
        label: "MovieGen",
        href: "https://github.com/anforsm/movie-diffusion/",
      },
    },

    {
      title: "Federated Learning Framework",
      techStack: [
        "PyTorch",
        "Python",
      ],
      description: "As part of my Capstone Project currently developing a Hierarchical Federated Learning framework based on the flower framework.",
      logo: ConsultlyLogo,
      link: {
        label: "FL Framework",
        href: "https://github.com/rmahendra9/EE364D",
      },
    },

    {
      title: "CFR-RL Generalization",
      techStack: [
        "PyTorch",
        "Python",
      ],
      description: "Research on the use of Reinforcement Learning for Network Optimzation. Based on thee CFR-RL algorithm working on a model that is able to generalize to any topology.",
      logo: ConsultlyLogo,
      link: {
        label: "Generalized CFR-RL",
        href: "https://github.com/CarlosMari/CFR-RL",
      },
    },
 
   ],
} as const;
