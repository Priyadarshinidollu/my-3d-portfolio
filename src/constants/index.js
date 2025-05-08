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
  mongodb,
  git,
  Cognizant,
  dotnet,
  azure,
  mysql,
  // certification
  azureSql,
  dotnetCerticication,
  reactHacker,
  ReactCertification,
  udemy
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  { id: "tech", title: "Skills" },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Architect",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer (Azure)",
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
    name: "Azure",
    icon: azure,
  },
 
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "DotNet Core WebApi",
    icon: dotnet,
  },

  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Full Stack Engineer Intern",
    company_name: "Cognizant Technology Solutions",
    icon: Cognizant,
    iconBg: "#ffff",
    date: "Feb 2022 - Aug 2022",
    points: [
      "Developed a full-stack Portfolio Management Application using .NET (C#) for backend APIs, React for dynamic frontend interfaces, and MySQL for secure data storage",
      "Integrated RESTful APIs to fetch real-time market data (stocks, mutual funds, ETFs) and update portfolio metrics dynamically.",
    ],
  },
  {
    title: "Programmer Analyst - Full Stack Engineer",
    company_name: "Cognizant Technology Solutions",
    icon: Cognizant,
    iconBg: "#ffff",
    date: "June 2023 - March 2024",
    points: [
      "Developed a feature-rich Music Store Application using React for an intuitive and responsive frontend, enhancing user experience with smooth navigation and interactive UI components.",
      "Built reusable React components for music browsing, playlists, audio playback, and user libraries, ensuring maintainability and scalability of the frontend codebase.",
      "Implemented backend services in .NET (C#) to manage user authentication, product catalogs, order processing, and streaming APIs.",
    ],
  },
  {
    title: "Programmer Analyst - Full Stack Engineer(Build Engineer)",
    company_name: "Cognizant Technology Solutions",
    icon: Cognizant,
    iconBg: "#E6DEDD",
    date: "April 2024 - Oct 2024",
    points: [
      "Managed and maintained CI/CD pipelines for Microsoft System Center builds using Azure DevOps and 1ES, ensuring reliable and consistent delivery across environments",
     ,
     "Monitored and troubleshot build processes using Visual Studio, 1ES dashboards, and log tracing to quickly identify and resolve build failures and performance bottlenecks.",

     "Automated repetitive build and deployment tasks using PowerShell scripting, improving efficiency and reducing manual errors.",
     "Integrated security and compliance checks into the pipeline to address vulnerability management, including scanning for outdated dependencies and applying security patches."
    ],
  },
  {
    title: " Frontend Developer (Self-Learning)",
    company_name: "Self Development",
    icon: "https://images.emojiterra.com/google/android-12l/512px/1f4d8.png",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Built several personal projects using React, integrating REST APIs and implementing routing, hooks, and state management.",
    "Learned advanced React concepts like hooks, context API, router, and state management.",
  ,
  `Earned multiple certifications and completed coding challenges on HackerRank:
   🏅 HackerRank React (Intermediate) Certificate`
],
  },
];

const certifications = [
  {
    name: "React Ceritification",
    issuedBy: "Udemy",
    icon: udemy,
    skills: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ReactCertification,
    // link: "https://media.licdn.com/dms/image/v2/D561FAQG55sr1f-XDWg/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1682097246005?e=1733990400&v=beta&t=vOTLYZgdopjjPiXUmJeycNaeFDy8NJ5U6WuKlowweVs",
  },
  {
    name: "DotNet Cerification",
    issuedBy: "Udemy",
    skills: "React,Tailwind Css ,Redux and Vercel ",
    icon: udemy,
    skills: [
      {
        name: " C#",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },

      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: dotnetCerticication,
    // link: "https://media.licdn.com/dms/image/v2/C561FAQHVD6BUknwQFw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1672569005067?e=1733990400&v=beta&t=f4hmQhacFv4jsup8Yj4ahCRNFDnwHBD5-oBm6erM1bo",
  },
  {
    name: "Azure SQL",
    issuedBy: "Udemy",
    icon: udemy,
    skills: [
      {
        name: "Cloud",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      
    ],
    image:
      azureSql,
    // link: "https://media.licdn.com/dms/image/v2/C561FAQEnvUHtcwmvLw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1671870014540?e=1733990400&v=beta&t=QRhF2UfkXmehKMoUZvJ_8HIJziyxHiPKGVS1lfrsVxY",
  },
];

const achievements = [
  
  {
    name: "Certificate of Accomplishment Frontend (React)",
    issuedBy: "Hacker Rank",
    icon: udemy,
    skills: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: reactHacker,
    link: "https://www.hackerrank.com/certificates/04b0d42cb9c1",
  },
];
const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
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
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "tripguide",
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  certifications,
  achievements,
  projects,
};
