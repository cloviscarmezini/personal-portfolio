import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  logoTag,
  logoEmutua,
  logoVivo,
  logoSesc,
  onefortwo,
  uber,
  renders,
  freelarest,
  instagram,
  threejs,
  android,
  apple,
  chromeIcon,
  github,
  atmaMeditation,
  avell
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Tech Lead",
    icon: creator,
    description: ''
  },
  {
    title: "Web Developer",
    icon: web,
    description: ""
  },
  {
    title: "React Native Developer",
    icon: mobile,
    description: ""
  },
  {
    title: "Backend Developer",
    icon: backend,
    description: ""
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tag Desenvolvimento",
    icon: logoTag,
    iconBg: "#383E56",
    date: "Feb 2017 - Aug 2021",
    activities: [
      "Prototyping, requirements analysis, database modeling and coding.",
      "Development of Applications, APIs, Systems, E-commerces, Platforms, landing pages and websites.",
      "Application deployment in cloud environments (AWS, Vercel).",
      "Briefing, alignment and delivery meetings with clients."
    ],
  },
  {
    title: "Development Intern",
    company_name: "SESC SP",
    icon: logoSesc,
    iconBg: "#ffffff",
    date: "Mar 2020 - Dec 2020",
    activities: [
      "Maintenance of legacy systems.",
      "Development of new systems."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "eMutua Digital",
    icon: logoEmutua,
    iconBg: "#383E56",
    date: "Sep 2021 - Mar 2023",
    activities: [
      "Maintenance on e-commerce platform.",
      "Implementation of new features.",
      "Maintenance and control of travel App versions, on Google Play and Apple Store.",
      "Development of layouts and pages.",
      "Daily, Sprint planning and Sprint review.",
    ],
  },
  {
    title: "Tech Lead - Digital Innovation Specialist",
    company_name: "Vivo - Telefonica",
    icon: logoVivo,
    iconBg: "#ffffff",
    date: "Apr 2023 - current",
    activities: [
      "As the leader of a meditation app squad, I collaborate in its maintenance, development of new features, problem-solving and enhancements.",
      "I have also made significant contributions to cost reduction and process improvement, resulting in up to 70% drop in activity execution time.",
      "Technologies: React Native, MongoDB,  Microservices,  Java,  Node.js with the Nest framework, RabbitMQ,  GCP, BigQuery."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: "0968a04c-d84f-4966-8eb6-9debb015e362",
    name: "One For Two",
    description: "A fitness app for scheduling classes, accessing workouts, direct instructor communication, and modifying fitness plans.",
    type: 'personal',
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
    ],
    image: onefortwo,
    links: [
      {
        url: "https://www.personaisonefortwo.com.br",
        icon: chromeIcon,
        color: "bg-white",
        alt: "Access Website"
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.onefortwo",
        icon: android,
        color: "bg-white",
        alt: "Access Google Play"
      },
      {
        url: "https://apps.apple.com/br/app/one-for-two/id6448317590?l=en",
        icon: apple,
        color: "bg-white",
        alt: "Access Apple Store"
      },
      {
        url: "-",
        icon: github,
        color: "bg-gray-800",
        alt: "Access Website",
        disabledColor: 'dark',
        disabled: true
      },
    ]
  },
  {
    id: "bc179a01-700f-4ca4-b020-3d8ba5bc3dd4",
    name: "Atma Meditação",
    type: 'collaborate',
    description: "A meditation, health and well-being app. As a team member (Tech Lead and Developer) I collaborate in several parts of this project.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Node-JS",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },
    ],
    image: atmaMeditation,
    links: [
      {
        url: "https://www.atmameditacao.com.br",
        icon: chromeIcon,
        color: "bg-white",
        alt: "Access Website"
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.movile.meditation.vivo&hl=pt_BR&gl=US",
        icon: android,
        color: "bg-white",
        alt: "Access Google Play"
      },
      {
        url: "https://apps.apple.com/br/app/atma-medita%C3%A7%C3%A3o-e-bem-estar/id1229827447",
        icon: apple,
        color: "bg-white",
        alt: "Access Apple Store"
      },
    ]
  },
  {
    id: "883e01e0-8dcf-42c4-9e20-73d31de689f8",
    name: "Avell",
    type: 'collaborate',
    description: "A e-commerce focused on selling high-performance notebooks. As a frontend team member I collaborate in several parts of this project.",
    tags: [
      {
        name: "React JS",
        color: "green-text-gradient",
      }
    ],
    image: avell,
    links: [
      {
        url: "https://avell.com.br",
        icon: chromeIcon,
        color: "bg-white",
        alt: "Access Website"
      }
    ]
  },
  {
    id: "6c2fd046-7676-46bf-b7cf-bffb50383388",
    name: "Render's Academy",
    type: 'personal',
    description:
      "A online courses platform for Cinema 4D, providing users with access to quality educational content.",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Template Blade",
        color: "text-orange-500",
      }
    ],
    deprecated: true,
    image: renders,
    links: [
      {
        url: "https://www.rendersacademy.com.br",
        icon: chromeIcon,
        color: "bg-white",
        alt: "Access Website"
      },
      {
        url: "-",
        icon: github,
        color: "bg-gray-800",
        alt: "Access Website",
        disabledColor: 'dark',
        disabled: true
      },
    ]
  },
  {
    id: "964ded32-8053-492d-a9c3-240a8e6870bb",
    name: "Freelarest",
    type: 'personal',
    description:
      "A platform for publishing and hiring freelancers for bars and restaurants.",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Next JS",
        color: "green-text-gradient",
      }
    ],
    deprecated: true,
    image: freelarest,
    links: [
      {
        url: "https://www.freelarest.com",
        icon: chromeIcon,
        color: "bg-white",
        alt: "Access Website"
      },
      {
        url: "",
        icon: github,
        color: "bg-gray-800",
        alt: "Access Website",
        disabledColor: 'dark',
        disabled: true
      },
    ]
  },
  {
    id: "3a639afa-0eb2-45c1-9f27-651dfe9f575d",
    name: "Uber clone",
    type: 'personal',
    description:
      "A Uber mobile app clone.",
    tags: [
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "green-text-gradient",
      }
    ],
    image: uber,
    links: [
      {
        url: "https://github.com/cloviscarmezini/uber-clone",
        icon: github,
        color: "bg-gray-800",
        alt: "Access Github"
      }
    ]
  },
  {
    id: "f66b5683-bae1-42db-9811-093dc43cfa96",
    name: "Instagram clone",
    type: 'personal',
    description:
      "A Instagram app clone.",
    tags: [
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Atomic Design",
        color: "green-text-gradient",
      }
    ],
    image: instagram,
    links: [
      {
        url: "https://github.com/cloviscarmezini/instagram-clone",
        icon: github,
        color: "bg-gray-800",
        alt: "Access Github"
      }
    ]
  }
];

export { services, technologies, experiences, testimonials, projects };
