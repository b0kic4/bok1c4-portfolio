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
    "Student Software Engineer -> Freelancer -> Entrepreneur. I love building things and learning new things.",
  summary: `
**Code Ninja Chronicles**

**🥷 Neovim Enthusiast:**  
My coding adventures are powered by Neovim, because why be slow when you can have the power of Vim?

**🎮 Language Playground:**  
TypeScript, Go, and a sprinkle of Java keeps my day and night fun. TypeScript for its flexibility, Go for its efficiency & speed, and Java for those LeetCode challenges just the right balance to keep things interesting :)

**🧩 OO Languages Fan:**  
Absolutely! I love diving into **object-oriented languages** they're like a playground of concepts and ideas that make coding so much more fun!

**📚 My approach to learning:**  
The best way I gain knowledge is by building things, reading articles, diving into books, writing about what I learn, and watching videos. Whether it’s software engineering, coding, or anything else, I’m all about learning by doing—even if I’m not a master of everything.

**🎉 Fun Facts About Me:**
- **🛠️ Neovim Enthusiast** I’m all about keeping my hands on the keyboard, avoiding the mouse whenever I can :D.
- **🕵️‍♂️ Ethical hacking** I’m passionate about ethical hacking and cybersecurity, always down for diving deeper and learning more in this niche.
- **💻 Crafting my own SaaS Solutions & Projects** I absolutely love it. From identifying a problem to creating a market-fit solution and finally building the application—it’s like therapy for me.
- **👀 Reddit** is my go-to spot. Whether it's opinions, recommendations, or critiques, there's no better place to tap into.
`,

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
      company: "Freelancing",
      href: "https://bok1c4.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Software Developer (Student Software Engineer)",
      logoUrl: "/freelancer.jpg",
      start: "January 2024",
      end: "Present",
      description:
        "Building websites for clients and creating my own applications",
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
    {
      title: "Insightify Scraper Microservice",
      href: "https://github.com/b0kic4/Insightify-chromedp-scraper",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "For the Insightify application, I built a custom web scraper using Go and ChromeDP (Chrome Developer Tools). This microservice captures high-quality website screenshots directly from the Next.js client. I implemented Redis for caching to reduce redundant requests and boost performance, while GORM handles database interactions, and Firebase Cloud Storage ensures efficient image storage, making a scalable and responsive system.",
      technologies: [
        "Go",
        "ChromeDP",
        "Redis",
        "SQL",
        "GORM",
        "PostgreSQL",
        "Firebase Cloud Storage",
        // "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/b0kic4/Insightify-chromedp-scraper",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/b0kic4/Insightify-chromedp-scraper",
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
      image: "/projects/insightify-scraper.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Insightify Message Queue & Cron Microservice",
      href: "https://github.com/b0kic4/insightify-nestjs-cron-jobs",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "The Insightify NestJS Microservice automates data management by scheduling checks every 12 hours to delete improvements older than 24 hours. It then sends a payload to RabbitMQ, where the client consumes the message and notifies the appropriate user. This microservice ensures efficient data cleanup and reliable message handling within the Insightify platform.",
      technologies: [
        "Nestjs",
        "Typescript",
        "RabbitMQ",
        "Task Schedule",
        // "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/b0kic4/insightify-nestjs-cron-jobs",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/b0kic4/insightify-nestjs-cron-jobs",
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
      image: "/projects/nestjs-rabbitmq2.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Tokos",
      href: "https://ataoakaoasa.vercel.app/",
      dates: "July 2024 - September 2024",
      active: true,
      description:
        "In collaboration with another developer, we developed an online store for Tokos Store. As the full stack developer, I was responsible for both the frontend and backend, ensuring a seamless user experience throughout the site.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://ataoakaoasa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GooseGodX/tokos-website",
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
      image: "/projects/tokos.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Tokos Admin Panel",
      href: "https://ataoakaoasadmin-panel.vercel.app/",
      dates: "July 2024 - September 2024",
      active: true,
      description:
        "The Tokos Admin Panel is a comprehensive management application designed specifically for the workers and administrators of Tokos. It features role-based authentication, allowing users to view live orders, create and modify products, assign roles, and perform all necessary CRUD operations. This tool streamlines the operational workflow, ensuring that the business runs smoothly and efficiently.",
      technologies: [
        "Next.js",
        "NextAuth",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ataoakaoasadmin-panel.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GooseGodX/tokos-admin-panel",
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
      image: "/projects/tokos-admin-panel.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Tokos Event Based Websocket Microservice",
      href: "https://github.com/GooseGodX/tokos-go-ws",
      dates: "July 2024 - September 2024",
      active: true,
      description:
        "The Tokos Event Based Websocket Microservice is a server designed for real-time, event-based communication between clients and servers. Built with Go, it ensures efficient message handling with robust validation, playing a key role in seamless interactions within the Tokos ecosystem.",
      technologies: ["Go", "Websockets", "Gorilla", "SQL", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://github.com/GooseGodX/tokos-go-ws",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GooseGodX/tokos-go-ws",
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
      image: "/projects/tokos-ws.png",
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
      language: "Go & Rust",
      description:
        "A high-performance database management system focusing on efficient data storage, retrieval, and transaction management.",
      reason:
        "I would like to build a DBMS because I think it's an excellent way to deepen my understanding of data structures, algorithms, memory management, and concurrency. This project offers practical experience with complex topics such as indexing, transactions, and query optimization, which are crucial skills in the field of software engineering.",
      languageReason: "Go for concurrency, Rust for memory safety.",
    },
    {
      title: "Distributed File System",
      language: "C++ with optional integration with Go & Rust",
      description:
        "A scalable distributed file system designed to handle massive amounts of data across multiple nodes.",
      reason:
        "I'm interested in developing a distributed file system because it presents an opportunity to explore the intricacies of distributed systems, including fault tolerance, data replication, and consistency models. This project will help me learn how to design and implement scalable and reliable systems, which are essential in today's data-driven world.",
      languageReason:
        "C++ for performance, Go/Rust for concurrency and safety.",
    },
    {
      title: "AI Game Bot",
      language: "Python",
      description:
        "An AI-powered game bot capable of playing and strategizing in complex games.",
      reason:
        "Creating an AI game bot is appealing to me because it combines my interest in artificial intelligence with a fun and interactive challenge. This project allows me to delve into AI concepts such as reinforcement learning, decision-making algorithms, and model training, all while applying these theories to real-world scenarios like gaming.",
      languageReason: "Python for its AI and ML libraries.",
    },
    {
      title: "Network Protocol Analyzer",
      language: "Go & Rust",
      description:
        "A tool for capturing, analyzing, and visualizing network traffic to diagnose and troubleshoot network issues.",
      reason:
        "I want to build a network protocol analyzer to enhance my understanding of network protocols, data packet structures, and cybersecurity. This project will give me hands-on experience in building low-level, high-performance software, and it's a great way to learn about the critical aspects of network security and data integrity.",
      languageReason: "Go for concurrency, Rust for safety and performance.",
    },
    {
      title: "Voice Assistant / Speech Recognition System",
      language: "Python & C++",
      description:
        "A system for recognizing and responding to voice commands using natural language processing and machine learning.",
      reason:
        "Developing a voice assistant or speech recognition system fascinates me because it involves cutting-edge technologies in natural language processing and human-computer interaction. This project is a fantastic opportunity to explore how machines understand and respond to human speech, and to learn about the underlying technologies that power voice interfaces.",
      languageReason: "Python for NLP/ML, C++ for performance.",
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
