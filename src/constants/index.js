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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  leetcode,
  tesla,
  rtra,
 fairymate,
  linkedin,
  tcs,
  tripguide,
  threejs,
  outlier,
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
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "AI  Trainer",
    company_name: "OUTLIER",
    icon: outlier,
    iconBg: "#383E56",
    date: "sep 2024 - present",
    points: [
      "Developing and curating high-quality datasets to train and fine-tune AI models.",
      "Labeling, annotating, and validating data to ensure accuracy and relevance for various machine learning tasks.",
      "Evaluating and optimizing model performance by running experiments and adjusting parameters.",
      "Collaborating with data scientists and machine learning engineers to define data requirements and training objectives.",
    ],
  },
  {
    title: "Web Developer Head",
    company_name: "RTRA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Leetcode Content Creator",
    company_name: "Leetcode",
    icon: leetcode,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Reviewing and validating problem statements, test cases, and solutions to ensure content quality and correctness.",
      "Collaborating with other reviewers, content creators, and developers to improve the overall problem-solving experience.",
      "Providing clear and optimized solutions for coding problems, emphasizing best practices and efficient algorithms.",
      "Conducting thorough code reviews and offering constructive feedback to enhance the quality of community submissions.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Solved 500 plus questions on leetcode and 1450 plus rating",
    name: "Leetcode",
    designation: "CFO",
    company: "Acme Co",
    image: leetcode,
    link:"https://leetcode.com/u/ritvik_bharti_01/",
  },
  {
    testimonial:
"Secured Global Rank of 836 in TCS codevita season 11.",
    name: "Tata Consultansy Services",
    designation: "COO",
    company: "DEF Corp",
    image: tcs,
    link:"",
  },
  {
    testimonial:
"5000 Plus followers on linkendin that shows my connection strategy",   
    name: "Linkedin",
    designation: "Linkedin",
    company: "456 Enterprises",
    image: linkedin,
    link:"https://www.linkedin.com/in/ritvik-bharti-677609257/",
  },
];

const projects = [
  {
    name: "RTRA LIVE WEBSITE",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name:"Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rtra,
    source_code_link: "https://github.com/ADITYA300645/RTRA-LIVE",
  },
  {
    name: "Fairy Mate",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",

      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: fairymate,
    source_code_link: "https://github.com/ritvikbharti/FAIRY_MATES",
  },
  {
    name: "Nirmaan",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "text-lime-700",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/ritvikbharti/Nirmaan",
  },
];

export { services, technologies, experiences, testimonials, projects };
