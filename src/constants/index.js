import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Personal Projects",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Personal Projects",
      icon: shopify,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Personal Projects",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Developing and maintaining web applications using ReactJs, NodeJs, and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Highly motivated with strong programming skills and a passion for software engineering seeking a challenging role.",
      name: "Monicah G",
      designation: "The Principal",
      company: "Elburgon -Sch",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Highly motivated intuitive learner with strong coding skills and passion for software engineering seeking an engineering role.",
      name: "John G-",
      designation: "Chief Principle",
      company: "Sch",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Allan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Myself -",
      designation: "Passion",
      company: "Learning",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI_Article Summarizer",
      description:
        "AI_article summarizer condenses lengthy texts, extracting key information for concise and efficient understanding. Revolutionize info consumption. Link: https://papaya-mochi-52fc61.netlify.app/",
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
      image: carrent,
      source_code_link: "https://github.com/allanmathenge/ai_summarizer",
    },
    {
      name: "TikTok Clone app",
      description:
        "AI-powered TikTok clone app with smart recommendation algorithms for personalized content discovery and seamless video editing features. Link: https://tiktik-clone-gules-mu.vercel.app/",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/allanmathenge/tiktik_clone",
    },
    {
      name: "Portfolio App ",
      description:
        "A sleek and intuitive app to showcase my previous skills, projects, and achievements to help others land their dream opportunities. Link: https://allanmathenge1.netlify.app/",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity cli",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/allanmathenge/AI_Promptopia",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };