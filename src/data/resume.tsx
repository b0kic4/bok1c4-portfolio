import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

// NOTE: Kursevi, Knjige, Osnovna, Srednja, Faks i ostali projekti

export const DATA = {
  name: "Boris Nikolic",
  initials: "BN",
  url: "https://bok1c4.vercel.app/",
  location: "Belgrade, Serbia",
  locationLink: "https://www.google.com/maps/place/belgrade",
  description:
    "Software Engineer - Entrepreneur. I love building things and learning new things.",
  summary: `I’ve been passionate about programming since early age. 
    I started exploring coding around **2017**, and by the end of **2021**, I wrote my first **React** code. 
    Initially, I learned **JavaScript, HTML, and CSS** through tutorials, building simple websites. 
    As I gained knowledge, I created my own **E-commerce sites, blogs**, and **basic websites**. 
    By late **2022**, I dived into **Node.js and TypeScript**, fostering a growing interest in **backend development** 
    and exploring new technologies and languages like **Python and C++**. 
    With increasing confidence, I built websites with **React, Node.js, MongoDB**, 
    and also developed some applications in **C**. 
    Fast forward two years, I have learned **TypeScript, Java, Go**, 
    and some JS frameworks like **NestJS** and **NextJS**. 
    I deepened my programming knowledge by reading books, creating software, 
    watching courses, and learning from other people's code. 
    Since then, I’ve focused on enhancing my skills in **software design, architecture, 
    distributed systems, cybersecurity, microservices, algorithms & data structures**.`,

  avatarUrl: "/me.png",
  skills: [
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Python",
    "Go",
    "Java",
    "C",
    "Postgres",
    "MySQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Docker",
    "Kubernetes",
    "AWS",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "borisnikolic2302@gmail.com",
    tel: "+381621996517",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/b0kic4",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/boris-nikolic-a44a2126a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bok1c4",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "https://bok1c4.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/freelancer.jpg",
      start: "January 2024",
      end: "Present",
      description:
        "Building websites for clients and creating Software as a Service applications",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Techincal school IT",
      href: "https://www.tsz.edu.rs/",
      degree: "High School Diploma",
      logoUrl: "/education/tehnicka-skola-logo.jpeg",
      start: "2019",
      end: "2023",
    },
    {
      school: "University Singidunum",
      href: "https://eng.singidunum.ac.rs/",
      degree: "Bachelor's Degree Software Engineering",
      logoUrl: "/education/singilogo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Inisghtify",
      href: "https://insightifyyy.vercel.app/",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT 4o](https://openai.com/index/hello-gpt-4o/), I decided to build a SaaS which allows users to analyze their website and provide potential improvements. Under the hood its using gpt-4o and custom built scraper for content capturing.",
      technologies: [
        "Next.js",
        "Nestjs",
        "RabbitMQ",
        "Go",
        "ChromeDP",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Gumroad",
        "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://insightifyyy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/b0kic4/Insightify",
          icon: <Icons.github className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/b0kic4/insightify-nestjs-cron-jobs",
        //   icon: <Icons.github className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/b0kic4/Insightify-chromedp-scraper",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/projects/insightify.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  advancedProjects: [
    {
      title: "Database Management System (DBMS)",
      language: "Rust",
      description:
        "A high-performance database management system focusing on efficient data storage, retrieval, and transaction management.",
      reason:
        "I would like to build a DBMS because I think it's an excellent way to deepen my understanding of data structures, algorithms, memory management, and concurrency. This project offers practical experience with complex topics such as indexing, transactions, and query optimization, which are crucial skills in the field of software engineering.",
    },
    {
      title: "Distributed File System",
      language: "C++",
      description:
        "A scalable distributed file system designed to handle massive amounts of data across multiple nodes.",
      reason:
        "I'm interested in developing a distributed file system because it presents an opportunity to explore the intricacies of distributed systems, including fault tolerance, data replication, and consistency models. This project will help me learn how to design and implement scalable and reliable systems, which are essential in today's data-driven world.",
    },
    {
      title: "AI Game Bot",
      language: "Python",
      description:
        "An AI-powered game bot capable of playing and strategizing in complex games.",
      reason:
        "Creating an AI game bot is appealing to me because it combines my interest in artificial intelligence with a fun and interactive challenge. This project allows me to delve into AI concepts such as reinforcement learning, decision-making algorithms, and model training, all while applying these theories to real-world scenarios like gaming.",
    },
    {
      title: "Network Protocol Analyzer",
      language: "Rust | C++",
      description:
        "A tool for capturing, analyzing, and visualizing network traffic to diagnose and troubleshoot network issues.",
      reason:
        "I want to build a network protocol analyzer to enhance my understanding of network protocols, data packet structures, and cybersecurity. This project will give me hands-on experience in building low-level, high-performance software, and it's a great way to learn about the critical aspects of network security and data integrity.",
    },
    {
      title: "Voice Assistant / Speech Recognition System",
      language: "Python & C++",
      description:
        "A system for recognizing and responding to voice commands using natural language processing and machine learning.",
      reason:
        "Developing a voice assistant or speech recognition system fascinates me because it involves cutting-edge technologies in natural language processing and human-computer interaction. This project is a fantastic opportunity to explore how machines understand and respond to human speech, and to learn about the underlying technologies that power voice interfaces.",
    },
  ],
  books: [
    {
      title: "Clean Architecture",
      image: "/books/CleanArchitecture.jpg",
      read: true,
    },
    {
      title: "Grokking Algorithms",
      image: "/books/grokking.jpg",
      read: false,
    },
    {
      title: "The Self-Taught Programmer",
      image: "/books/STProgrammer.jpg",
      read: false,
    },
    {
      title: "Refactoring",
      image: "/books/Refactoring.jpg",
      read: false,
    },
    {
      title: "Designing Data-Intensive Applications",
      image: "/books/DesigningDataIntesiveApp.jpg",
      read: true,
    },
    {
      title: "Software Architecture: The Hard Parts",
      image: "/books/SoftwareArchitectureHardParts.jpg",
      read: false,
    },
    {
      title: "Pragmatic Programmer",
      image: "/books/PragmaticProgrammer.jpg",
      read: true,
    },
    {
      title: "Code 2 Complete",
      image: "/books/Code2Complete.jpg",
      read: false,
    },
  ],
} as const;
