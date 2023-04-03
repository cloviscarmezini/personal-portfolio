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
  github
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
  },
  {
    title: "Content Creator",
    icon: creator,
    description: '(Coming soon)'
  },
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
  // {
  //   title: "Digital Innovation Specialist",
  //   company_name: "Vivo - Telefonica",
  //   icon: logoVivo,
  //   iconBg: "#ffffff",
  //   date: "Starts at Apr 2023",
  //   activities: [],
  // },
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
    name: "One For Two",
    description: "A fitness app for scheduling classes, accessing workouts, direct instructor communication, and modifying fitness plans.",
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
        alt: "icon chrome"
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.onefortwo",
        icon: android,
        color: "bg-white",
        alt: "icon android"
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.onefortwo",
        icon: apple,
        color: "bg-white",
        alt: "icon apple"
      }
    ]
  },
  {
    name: "Render's Academy",
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
    image: renders,
    links: []
  },
  {
    name: "Freelarest",
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
    image: freelarest,
    links: [
      {
        url: "https://www.freelarest.com",
        icon: chromeIcon,
        color: "bg-white",
        alt: "icon apple"
      }
    ]
  },
  {
    name: "Uber clone",
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
        alt: "icon apple"
      }
    ]
  },
  {
    name: "Instagram clone",
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
        alt: "icon apple"
      }
    ]
  }
];

export { services, technologies, experiences, testimonials, projects };
