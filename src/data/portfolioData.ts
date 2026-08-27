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
    title: "Introdction to Generative AI Studio",
    issuer: "Google Cloude",
    year: "2025",
    category: "AI studio",
    image: "4.jpeg",
    description: "Completed the “Introduction to Generative AI Studio” course by Google Cloud.",
    
  },
  {
    id: "cert-02",
    title: "Hackathon",
    issuer: "Brine O Vision",
    year: "2024",
    category: "Front-End",
    image: "2.jpeg",
    description: " Participated in the Brinovision Hackathon at my college, collaborating with a team to develop an innovative solution to a real-world problem."
  },
  {
    id: "cert-03",
    title: "Hackathon",
    issuer: "Google Student Ambassador",
    year: "2025",
    category: "Database",
    image: "3.jpeg",
    description: "Participated in a Google Student Ambassador Hackathon at my collegeworking with a team to develop an innovative solution to a real-world problem."
  },
   {
    id: "cert-04",
    title: "Introduction to Java Programming",
    issuer: "EDX",
    year: "2024",
    category:"java",
    image: "1.jpeg",
    description: "Gained foundational knowledge of Java programming, including basic syntax, variables, control structures, and object-oriented programming concepts."

  },

  {
  id: "cert-05",
  title: "ChatGPT 101: What is ChatGPT?",
  issuer: "Simplilearn SkillUp",
  year: "2025",
  category: "Generative AI",
  image: "5.jpeg",
  description: "Successfully completed the ChatGPT 101 course and gained an understanding of ChatGPT and its applications."
},

{
  id: "cert-06",
  title: "Full Stack Web Development Course",
  issuer: "Aajhub & Sapienz Recruit",
  year: "2025",
  category: "Web Development",
  image: "6.jpeg",
  description: "Successfully completed a Full Stack Web Development course, gaining knowledge of front-end and back-end development."
},

{
  id: "cert-07",
  title: "Python Programming Fundamentals",
  issuer: "Aajhub & Sapienz Recruit",
  year: "2025",
  category: "Programming",
  image: "7.jpeg",
  description: "Successfully completed Python Programming Fundamentals and gained foundational knowledge of Python programming."
},

{
  id: "cert-08",
  title: "Web Development Internship",
  issuer: "SkillCraft Technology",
  year: "2025",
  category: "Internship",
  image: "8.jpeg",
  description: "Successfully completed a 1-month internship in Web Development at SkillCraft Technology."
},

{
  id: "cert-09",
  title: "JavaScript Course With Certification: Unlocking the Power of JavaScript",
  issuer: "Scaler Topics",
  year: "2026",
  category: "Web Development",
  image: "9.jpeg",
  description: "Completed the JavaScript course covering 70 video tutorials, 9 modules, and 8 challenges."
},

{
  id: "cert-10",
  title: "Python Essentials 1",
  issuer: "Cisco Networking Academy",
  year: "2026",
  category: "Programming",
  image: "10.jpeg",
  description: "Successfully completed Python Essentials 1 through the Cisco Networking Academy program."
}
 
  
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-01",
    number: "",
    name: "Home-Food",
    description: "Home Food is a simple and attractive static website that showcases delicious homemade food with a user-friendly design.",
    techStack: [ "JavaScript", "HTML5", "CSS3"],
    image: "food.jpeg",
    githubUrl: "https://github.com/pooja-pooja09112003/Home-Food.git",
    liveDemoUrl: "https://home-food-5mws.vercel.app/",
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

