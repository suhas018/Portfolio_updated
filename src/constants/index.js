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
  meta,
  starbucks,
  tesla,
  shopify,
  chrono,
  jobit,
  tripguide,
  threejs,
  blog,
  devFinder,
  DjangoREST,
  Nextjs,
  django
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "LLM Kiddie",
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "NextJS",
      icon: Nextjs,
    },
    {
      name: "Django",
      icon: django,
    },
  ];
  
  const experiences = [
    
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "ChronoCollective",
      description:
        "a Django-based web app fostering collaborative learning.",
      tags: [
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "red-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        }
      ],
      image: chrono,
      source_code_link: "https://github.com/suhas018/ChronoCollective",
    },

    {
      name: "Dev Finder",
      description:
        "A Collaborating Platform, together we build Apps.",
      tags: [
        {
          name: "NextJS",
          color: "Black-text-gradient",
        },
        {
          name: "ShadCN",
          color: "white-text-gradient",
        },
        {
          name: "Postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "Drizzle",
          color: "yellow-text-gradient",
        },
        {
          name: "TailWind CSS",
          color: "blue-text-gradient",
        },
      ],
      image: devFinder,
      source_code_link: "https://github.com/suhas018/dev-finder",
    },

    {
      name: "Blog App",
      description:
        "A Platform To express Your Learnings.",
        tags: [
          {
            name: "Django",
            color: "green-text-gradient",
          },
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "HTML",
            color: "red-text-gradient",
          },
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
          {
            name: "javascript",
            color: "yellow-text-gradient",
          },
          {
            name: "SQLite",
            color: "red-text-gradient",
          },
        ],
        image: blog,
        source_code_link: "https://github.com/suhas018/Blog_application",
      },
      
    ];
  
  export { services, technologies, experiences, testimonials, projects };