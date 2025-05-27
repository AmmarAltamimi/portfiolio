import project1 from "../image/project-1.png";
import project2 from "../image/project-2.jpeg";
import project3 from "../image/project-3.jpeg";
import project4 from "../image/project-4.png";
import project5 from "../image/project-5.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "SaaS Tech",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies:[
      "JavaScript/TypeScript",
      "React",
      "Next.js ",
      "Node.js & Express.js",
      "MongoDB/Mongoose"
    ],
  },
  {
    year: "2024 - 2025",
    role: "Full Stack Developer",
    company: "TechnoHacks EduTech",
    description: `Designed and developed user interfaces using Next.js and React. Integrated frontend components with Node.js APIs and optimized performance.`,
    technologies: [
      "React",
      "Next.js ",
      "Node.js & Express.js",
      "RESTful APIs"
    ],
  },
  {
    year: "2022 - 2024",
    role: "Front End Developer",
    company: "Rukn",
    description: `Developed and maintained responsive web applications using HTML5, CSS3, and React. Managed state with Redux/Context API and ensured code quality via Git`,
    technologies:  [
      "HTML5",
      "CSS3",
      "JavaScript/TypeScript",
      "React",
      "Redux/Context API"
    ],
  },
];



export const PROJECTS =  [
  {
    title: "Multi-vendor eCommerce Website",
    image: project1,
    description:
      "Robust multi-vendor eCommerce platform with integrated admin, vendor, and customer management; dynamic shipping rates and secure transactions via Stripe and PayPal.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Node.js",
      "Express.js",
      "shadcn/ui",
      "Postman",
      "Redux Toolkit",
      "Framer Motion",
      "WebSockets",
      "Cloudinary",
      "Multer",
      "Stripe",
      "PayPal",
      "Vercel",
    ],
  },
  {
    title: "Real-time Chat Website",
    image: project2,
    description:
      "Real-time chat app enabling instant communication with scalable server-side rendering and bidirectional messaging.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Node.js",
      "Express.js ",
      "Postman",
      "Redux Toolkit",
      "WebSockets",
      "Cloudinary",
      "Multer",
      "Vercel",
    ],
  },
  {
    title: "Twitter Clone Website",
    image: project3,
    description:
      "Social media platform replicating core Twitter features such as tweeting, following, liking, retweeting, and real-time notifications.",
    technologies: [
      "React.js",
      "MongoDB",
      "Node.js",
      "Express.js ",
      "Postman",
      "Redux Toolkit",
      "Cloudinary",
      "Multer",
      "Vercel",
    ],
  },
  {
    title: "Greeting Cards Website",
    image: project4,
    description:
      "Personalized greeting card app that lets users design and share custom cards easily with interactive UI effects.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Lottie Files",
      "Vercel",
    ],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A responsive front-end portfolio website showcasing projects, skills, and contact information with interactive UI animations and smooth navigation.",
    technologies: [
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Lottie Files",
      "Responsive Utility",
      "TypeScript"
    ],
  },
];

