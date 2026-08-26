import { EducationItem, TechnicalSkill, CertificateItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: "Poojitha Lothugedda",
  title: "PYTHON FULL STACK DEVELOPER",
  taglineMain: "Making the web more beautiful, intuitive, and meaningful.",
  bio: "Hi, I'm a Full Stack Developer and Digital Creative who enjoys creating modern, user-friendly websites with clean and engaging UI/UX. I focus on turning ideas into meaningful digital experiences that look beautiful, feel intuitive, and create a strong connection with users.",
  location: "Chinnadimili, Srikakulam",
  email: "lothugedda09@gmail.com",
  displayEmail: "lothugedda09@gmail.com",
  website: "www.poojithalothugedda.com",
  highlights: [
    {
      icon: "dedication",
      title: "100% DEDICATION",
      subtitle: "Passionate about creating better experiences"
    },
    {
      icon: "uiux",
      title: "UI/UX",
      subtitle: "Focused on clean & engaging experiences"
    },
    {
      icon: "development",
      title: "DEVELOPMENT",
      subtitle: "Turning ideas into functional websites"
    }
  ],
  socials: [
    { label: "LinkedIn", short: "in", url: "https://www.linkedin.com/in/poojitha-lothugedda-4b6554343/" },
    { label: "GitHub", short: "gh", url: "https://github.com/pooja-pooja09112003" }
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "Sri Sivani College of Engineering",
    period: "2023 – 2027",
    location: "Srikakulam",
    description: "Computer Science & Engineering student, building my foundation in technology, development, and digital experiences.",
    badge: "Undergraduate"
  },
  {
    id: "intermediate",
    degree: "Intermediate – MPC",
    field: "Mathematics, Physics, Chemistry",
    institution: "Sri Chaitanya Junior College",
    period: "2021 – 2023",
    location: "Vizag",
    description: "MPC student, developing a strong foundation in mathematics, physics, and chemistry.",
    badge: "Higher Secondary"
  },
  {
    id: "school",
    degree: "School Education",
    field: "General Academics",
    institution: "Bharathi International School",
    period: "2010 – 2020",
    location: "Srikakulam",
    description: "Completed my school education and developed the foundation for my academic journey.",
    badge: "Secondary School"
  }
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { id: "html", name: "HTML", category: "core", iconType: "html" },
  { id: "css", name: "CSS", category: "core", iconType: "css" },
  { id: "javascript", name: "JavaScript", category: "core", iconType: "javascript" },
  { id: "python", name: "Python", category: "core", iconType: "python" },
  { id: "react", name: "React Basics", category: "core", iconType: "react" },
  { id: "java", name: "Java Basics", category: "core", iconType: "java" },
  { id: "django", name: "Django", category: "core", iconType: "django" },
  { id: "git", name: "Git", category: "tool", iconType: "git" },
  { id: "github", name: "GitHub", category: "tool", iconType: "github" },
  { id: "frontend", name: "Front-End Design", category: "core", iconType: "frontend" },
  { id: "sql", name: "SQL", category: "core", iconType: "sql" },
  { id: "msword", name: "MS Word", category: "tool", iconType: "word" },
  { id: "msexcel", name: "MS Excel", category: "tool", iconType: "excel" },
  { id: "chatgpt", name: "ChatGPT", category: "ai", iconType: "chatgpt" },
  { id: "gemini", name: "Gemini", category: "ai", iconType: "gemini" },
  { id: "claude", name: "Claude", category: "ai", iconType: "claude" },
  { id: "aistudio", name: "Google AI Studio", category: "ai", iconType: "aistudio" },
  { id: "deepseek", name: "DeepSeek", category: "ai", iconType: "deepseek" }
];

export const CREDENTIALS_DATA: CertificateItem[] = [
  {
    id: "cert-01",
    title: "Python Full Stack Development",
    issuer: "Certification Authority",
    year: "2024",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=85",
    description: "Certified proficiency in Python web development, database architecture, and backend application structure.\nDemonstrates hands-on mastery in developing responsive full stack web applications."
  },
  {
    id: "cert-02",
    title: "Frontend Web Development & UI/UX",
    issuer: "Professional Institute",
    year: "2024",
    category: "Front-End",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    description: "Comprehensive certification covering modern HTML5, CSS3, responsive layouts, and interactive JavaScript interfaces.\nFocuses on building intuitive user experiences with pristine typography and styling."
  },
  {
    id: "cert-03",
    title: "Database Management & SQL Systems",
    issuer: "Technical Academy",
    year: "2023",
    category: "Database",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    description: "Foundational mastery in relational database schemas, complex SQL queries, and data modeling.\nValidates core principles of reliable and structured data management."
  },
  {
    id: "cert-04",
    title: "Django Web Framework Mastery",
    issuer: "Software Development Institute",
    year: "2024",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    description: "Specialized certification in building secure, scalable backend architectures with Django ORM, authentication, and REST APIs.\nHighlights practical implementation of modular web services."
  },
  {
    id: "cert-05",
    title: "Responsive Web Design & Modern CSS",
    issuer: "Interactive Web Academy",
    year: "2023",
    category: "Front-End",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    description: "In-depth validation of responsive design principles, Flexbox, CSS Grid systems, and cross-browser accessibility.\nFocused on fluid, adaptive layouts across all modern screen resolutions."
  },
  {
    id: "cert-06",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Global Code Academy",
    year: "2023",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=85",
    description: "Rigorous certification covering core ES6+ JavaScript concepts, DOM manipulation, asynchronous programming, and algorithm optimization.\nDemonstrates deep logical problem-solving abilities."
  },
  {
    id: "cert-07",
    title: "Version Control with Git & GitHub",
    issuer: "Open Source Institute",
    year: "2023",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=85",
    description: "Certification in collaborative software version control, branching strategies, pull requests, and CI/CD repository workflows.\nEnsures seamless team collaboration and codebase integrity."
  },
  {
    id: "cert-08",
    title: "UI/UX Design Fundamentals & Prototyping",
    issuer: "Design Excellence Academy",
    year: "2024",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=85",
    description: "Certification covering user research, wireframing, interactive prototyping, and design system hierarchy.\nFocuses on user-centric interface aesthetics and seamless interaction flows."
  },
  {
    id: "cert-09",
    title: "HTML5 Web Standards & Accessibility",
    issuer: "Web Standards Consortium",
    year: "2023",
    category: "Front-End",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
    description: "Validation of semantic HTML structures, ARIA accessibility guidelines, and SEO best practices.\nEnsures inclusive and standards-compliant web development."
  },
  {
    id: "cert-10",
    title: "AI Prompt Engineering & GenAI Tools",
    issuer: "AI Innovations Lab",
    year: "2024",
    category: "AI & Productivity",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=85",
    description: "Certification in integrating generative AI models (Gemini, Claude, ChatGPT) to accelerate developer workflows.\nCovers prompt optimization, automated code assistance, and intelligent workflows."
  },
  {
    id: "cert-11",
    title: "Core Java & Object-Oriented Principles",
    issuer: "Computer Science Academy",
    year: "2023",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    description: "Fundamental mastery in Java syntax, class hierarchies, inheritance, polymorphism, and memory management.\nDemonstrates strong foundation in object-oriented programming methodologies."
  },
  {
    id: "cert-12",
    title: "RESTful API Development with Python",
    issuer: "Backend Engineering Guild",
    year: "2024",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
    description: "Certification in designing, building, and documenting secure RESTful endpoints, JSON parsing, and API error handling.\nEnables seamless client-server communications."
  },
  {
    id: "cert-13",
    title: "Web Application Security Essentials",
    issuer: "CyberTech Academy",
    year: "2024",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
    description: "Covers defense against OWASP top vulnerabilities, SQL injection prevention, CSRF protection, and secure session handling.\nValidates application hardening best practices."
  },
  {
    id: "cert-14",
    title: "Cloud Deployment & Hosting Fundamentals",
    issuer: "Cloud Engineering Institute",
    year: "2024",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    description: "Foundations in cloud hosting, server configuration, domain linking, and production web deployment.\nEnsures reliable live application uptime and delivery."
  },
  {
    id: "cert-15",
    title: "Agile Project Lifecycle & Collaboration",
    issuer: "Software Project Management Association",
    year: "2024",
    category: "Management",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85",
    description: "Certified understanding of Agile sprint workflows, iterative delivery, code reviews, and cross-functional team communication.\nFosters efficient development execution."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-01",
    number: "",
    name: "Portfolio Web Application",
    description: "A modern, responsive personal portfolio website showcasing full stack projects, skills, and interactive credentials.",
    techStack: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/poojithalothugedda/project-01",
    liveDemoUrl: "https://poojithalothugedda.vercel.app",
    category: "Web Development"
  },
  {
    id: "project-02",
    number: "",
    name: "E-Commerce Web Portal",
    description: "Full-featured web application with dynamic product catalogs, search filtering, cart management, and seamless order flow.",
    techStack: ["Python", "Django", "SQL", "JavaScript", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/poojithalothugedda/project-02",
    liveDemoUrl: "https://project-demo-02.example.com",
    category: "Full Stack"
  },
  {
    id: "project-03",
    number: "",
    name: "Student Academic Management System",
    description: "Database-driven management portal for tracking academic records, course enrollments, attendance, and student performance.",
    techStack: ["Python", "SQL", "Django", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/poojithalothugedda/project-03",
    liveDemoUrl: "https://project-demo-03.example.com",
    category: "Web App"
  },
  {
    id: "project-04",
    number: "",
    name: "AI-Powered Task Assistant",
    description: "Intelligent web application utilizing AI tools for automated task prioritization, summarization, and workflow productivity.",
    techStack: ["Python", "JavaScript", "Gemini API", "HTML/CSS", "Git"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/poojithalothugedda/project-04",
    liveDemoUrl: "https://project-demo-04.example.com",
    category: "AI & Full Stack"
  },
  {
    id: "project-05",
    number: "",
    name: "Interactive Recipe & Nutrition Guide",
    description: "Web application featuring dynamic dietary filtering, ingredient scaling calculators, and curated culinary guides.",
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/poojithalothugedda/project-05",
    liveDemoUrl: "https://project-demo-05.example.com",
    category: "Frontend"
  },
  {
    id: "project-06",
    number: "",
    name: "Weather & Environmental Dashboard",
    description: "Clean real-time meteorological monitor providing interactive forecasts, climate data, and atmospheric quality readings.",
    techStack: ["Python", "Django", "JavaScript", "SQL", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/poojithalothugedda/project-06",
    liveDemoUrl: "https://project-demo-06.example.com",
    category: "Full Stack"
  }
];

