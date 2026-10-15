import {
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, CVIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Carlos Marí Noguera",
  initials: "CMN",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Atlanta",
  about:
    "Graduate Engineering Student",
  summary:
    "Currently doing research on the privacy and personalization in FL",
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
      {
        name: "CV",
        url: "./resume.pdf",
        icon: CVIcon,
      },
    ],
  },
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "MSc in Electrical and Computer Engineering, Thesis Option",
      gpa: "4.0",
      coursework: "Microelectronics, Optoelectronics, Advanced Wireless Networks",
      start: "2025",
      end: "2026",
    },
    {
      school: "Universidad Pontifica de Comillas ICAI",
      degree: "MSc in Telecommunication Engineering",
      gpa: "",
      coursework: "",
      start: "2024",
      end: "2026",
    },

    {
      school: "Universidad Pontifica de Comillas ICAI",
      degree: "Bachelor's Degree in Telecommunication Technologies Engineering",
      gpa: "Grade: 7.9/10",
      coursework: "Coursework: Algorithms, Digital Systems I, Digital Systems II, Software Engineering, Signals and Systems, Communication Theory, Radiation and Propagation, Electromagnetic Fields",
      start: "2020",
      end: "2024",
    },
    {
      school: "The University of Texas at Austin",
      degree: "Bachelor's Degree in Electrical and Computer Engineering (Exchange)",
      gpa: "GPA: 3.92",
      coursework: "Corsework: Digital Image Processing, Edge AI, Reinforcement Learning, Probability and Randomm Processes",
      start: "2023",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Invopop (YC 23)",
      link: "https://invopop.com",
      badges: [],
      title: "Product Engineer",
      start: "May 2026",
      end: "July 2026",
      description:
        "Led the integration of the danish e-invoicing network NemHandel.",
    },
    {
      company: "Instituto de Investigación Tecnológica",
      link: "https://www.iit.comillas.edu",
      badges: [],
      title: "Research Assistant",
      start: "Sept 2024",
      end: "December 2025",
      description:
        "Research on the use of autoencoders and diffusion in timeseries forecasting",
    },

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
    "JavaScript",
    "ONNX",
    "Go",
    "FastAPI"
  ],
  projects: [
    {
      title: "The Effectiveness of Federated Learning in seismic interpretation",
      techStack: [
        "PyTorch",
        "Python",
      ],
      description: "Presented at IMAGE26",
      logo: ConsultlyLogo,
      link: {
        label: "Federated Learning",
        href: "https://alregib.ece.gatech.edu/image-2026-papers/the-effectiveness-of-federated-learning-in-seismic-interpretation/",
      },
    },
    {
      title: "sop-runtime: Reliable LLM Agents from YAML Procedures",
      techStack: [
        "Python",
        "FastAPI",
        "LLMs",
      ],
      description: "YAML-defined procedures for LLM agents: code enforces identity checks, confirmations and data access; the model only reads and phrases. Guardrails, journey tests and pass^k evals.",
      logo: ConsultlyLogo,
      link: {
        label: "sop-runtime",
        href: "https://github.com/CarlosMari/sop-runtime",
      },
    },
    {
      title: "Timeseries forecasting",
      techStack: [
        "PyTorch",
        "Python",
      ],
      description: "Use of autoencoders and diffusion to forecast timeseries",
      logo: ConsultlyLogo,
      link: {
        label: "Autoencoders",
        href: "https://github.com/CarlosMari/TimeSeries",
      },
    },

    {
      title: "Neural Network Library from Scratch [WIP]",
      techStack: [
        "C++",
        "CUDA",
      ],
      description: "Developed a bare C++ neural network library to learn about C++ and Cuda integrations",
      logo: ConsultlyLogo,
      link: {
        label: "MovieGen",
        href: "https://github.com/CarlosMari/neuralc/",
      },
    },

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
