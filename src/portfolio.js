/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Owen Moloney",
  title: "Hi, I'm Owen",
  subTitle: emoji(
    "Full-stack software engineer with experience building production applications end-to-end — from React/TypeScript frontends to Node.js and Supabase/AWS backends. Recently shipped features at The Social Company and Tennis Nomad." ),
  resumeLink:
    "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/owenmoloney",
  linkedin: "https://www.linkedin.com/in/owen-moloney-b53930250/",
  gmail: "omoloney@fordham.edu",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER — REACT, NODE.JS, TYPESCRIPT, AND CLOUD-DEPLOYED BACKENDS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fordham",
      logo: require("./assets/images/FordhamLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - May 2026",
      desc: "Recieved Dean's List Honors multiple semesters while being an active member of club Sports",
    },
    {
      schoolName: "Chaminade High School",
      logo: require("./assets/images/ChaminadeLogo.webp"),
      subHeader: "High School Diploma",
      duration: "September 2018 - May 2022",
      desc: "Revieced Honors List Every Trimester Until Graduation",
      descBullets: ["Competed at a State level in Varsity Track & Field",
                    "Participated in multiple clubs for community service and leadership positions"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "The Social Company of the United States, Inc",
      companylogo: require("./assets/images/thesoco_logo.jpeg"),
      date: "December 2025 – June 2026",
      desc: "Developed a full-stack AI-powered personal assistant over 5 months (including 2 months of planning and iteration on approach) integrating Twilio SMS, Google Calendar OAuth, Grok AI, and financial data APIs with conversation memory and natural language processing.",
      descBullets: [
        "Architected scalable serverless backend infrastructure using Supabase Edge Functions, implementing secure OAuth 2.0 flows with PKCE, encrypted token storage, and automated refresh token rotation.",
        "Engineered conversation memory layer using relational data modeling and indexed query optimization to maintain multi-session state consistency and low-latency retrieval.",
        "Developed a reactive React (TypeScript) frontend with real-time messaging UI, async state synchronization, optimistic updates, and robust error boundary handling.",
        "Configured webhook pipelines and event-driven messaging workflows to process inbound/outbound SMS, ensuring idempotency, rate limiting, and fault tolerance with A2P 10DLC messaging compliance."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Tennis Nomad",
      companylogo: require("./assets/images/tennisNomad.jpeg"),
      date: "May 2025 – September 2025",
      desc: "Developed a web application for Tennis Nomad, a startup that provides a platform for customers to book custom travel packages for tennis tournaments.",
      descBullets: [
        "Worked across the full stack to build a web platform with Admin, Client, and Marketing portals using Vue.js on the frontend and Node.js/Express on the backend.",
        "Designed and implemented a REST API with 12+ authenticated modules covering trips, invitations, participants, reservations, budgets, itineraries, and user profiles.",
        "Uses Firebase Firestore for data (trips, users, participants, invitations, reservations). All three portals connect to the same backend API and share the same authentication system.",
        "Implemented role-based access control with protected routes, separating admin and client functionality using Firebase JWT authentication.",
        "Wrote unit tests across front-end and back-end code."
      ]
    },
    {
      role: "Developer",
      company: "Architectural Wood Flooring Inc.",
      companylogo: require("./assets/images/Architectural_Wood_Flooring_Inc.png"),
      date: "August 2023 – Present",
      desc: "Built and continue to maintain a void-detection estimating tool in Java for a wood flooring business, replacing a manual takeoff process.",
      descBullets: [
        "Designed and built a void-detection algorithm in Java that calculates workable floor area and material/cost estimates from floor-plan input.",
        "Continue to adjust and extend the algorithm as new material types and floor-shape requirements arise, without breaking existing estimate accuracy.",
        "Tool is in continuous production use since 2023, cutting 50+ hours of manual takeoff time per quarter."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Alpha Prime Tech",
      companylogo: require("./assets/images/alphaprimetech_logo.jpeg"),
      date: "May 2024 – August 2024",
      desc: "Completed 8 applied backend training projects covering OOP, data structures, and system design during an intensive Java-focused internship program."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL AND ACADEMIC PROJECTS",
  projects: [
    {
      name: "Chronos",
      subtitle: "Distributed Job Scheduler (In Progress)",
      image: require("./assets/images/CHRONOS.png"),
      status: "In Progress",
      desc: "Production-style distributed job scheduler built in Go for reliable background task execution. Designed around distributed systems concepts including worker coordination, fault tolerance, durable persistence, and recovery from failures.",
      technologies: [
        "Go",
        "PostgreSQL",
        "Redis",
        "React",
        "TypeScript",
        "Docker",
        "GitHub Actions",
        "Prometheus"
      ],
      engineeringConcepts: [
        "Leader Election",
        "Worker Coordination",
        "Fault Tolerance",
        "Retry Systems",
        "Durable Persistence"
      ],
      whyBuilt:
        "I wanted to move beyond application-level development and build infrastructure similar to the systems that power modern software platforms. Chronos explores the engineering challenges behind reliable distributed execution, including coordination, failure recovery, and scalable background processing.",
      futureApplications:
        "Can serve as an execution layer for future AI agents and SaaS applications requiring scheduled workflows, background jobs, delayed actions, and reliable external API processing.",
      github: "https://github.com/owenmoloney/chronos"
    },
    {
      name: "MEDMMO",
      subtitle: "Medical Records Management Platform",
      image:
        require("./assets/images/medical-logo.svg").default ||
        require("./assets/images/medical-logo.svg"),
      desc: "A full-stack web application designed to help hospitals manage and organize medical records. The platform focuses on improving accessibility and management of healthcare information through a structured digital system.",
      technologies: ["JavaScript", "Web Development", "Database Systems"],
      engineeringConcepts: [
        "Full-Stack Application Architecture",
        "Database Design",
        "CRUD Operations",
        "User-Focused Software Design"
      ],
      whyBuilt:
        "I wanted to build a practical application that solves a real-world organizational problem while applying software engineering principles. The project provided experience designing systems around structured data and user workflows.",
      futureApplications:
        "Could be expanded into a larger healthcare platform with authentication, role-based access control, analytics, and integrations with external healthcare systems.",
      demo: "https://storm.cis.fordham.edu/~mballard7/medical-records-swe/medical-records-deploy/"
    },
    {
      name: "Smart Waste Management System",
      subtitle: "C++ Scheduling Algorithm Simulator",
      image: require("./assets/images/trashLogo.avif"),
      desc: "A C++17 simulator that models and optimizes janitorial waste collection using scheduling algorithms and priority-based task management. The system evaluates bin conditions and dynamically assigns collection tasks.",
      technologies: ["C++17"],
      engineeringConcepts: [
        "Scheduling Algorithms",
        "Priority Queues",
        "Algorithm Optimization",
        "Simulation Design",
        "Metrics Generation"
      ],
      whyBuilt:
        "I wanted to explore algorithm design beyond traditional interview problems by applying scheduling techniques to a realistic optimization problem. The project strengthened my understanding of system modeling, performance tradeoffs, and modular software design.",
      futureApplications:
        "Could be extended into real-world smart infrastructure systems using IoT sensor data, predictive scheduling, and automated resource allocation.",
      github: "https://github.com/owenmoloney/smart-waste-platform"
    },
    {
      name: "Floor Estimate Pro",
      subtitle: "Production Java Estimation Application",
      image: require("./assets/images/Estimate_Pro.png"),
      desc: "A Java desktop application that detects floor-plan voids and calculates square-footage and material cost estimates, replacing a previously manual takeoff process. The application has been used in production since 2023.",
      technologies: ["Java"],
      engineeringConcepts: [
        "Computational Geometry",
        "Algorithm Design",
        "Extensible Software Architecture",
        "Production Software Development"
      ],
      whyBuilt:
        "I built this application to solve a real business problem by replacing a repetitive manual workflow with automated calculations. The project demonstrates how software can directly improve operational efficiency.",
      futureApplications:
        "Could be expanded with cloud storage, collaborative estimating tools, automated blueprint processing, and integrations with business management systems.",
      github: "https://github.com/owenmoloney/floor-estimate-pro"
    },
    {
      name: "Resume Classifier",
      subtitle: "NLP-Based Resume Matching Pipeline",
      image: require("./assets/images/Resume_Class.png"),
      desc: "An end-to-end NLP pipeline that matches resumes with job postings using TF-IDF vectorization, Naive Bayes classification, and cosine similarity ranking. The system focuses on interpretable machine learning rather than black-box approaches.",
      technologies: ["Python", "TF-IDF", "Naive Bayes", "NLP"],
      engineeringConcepts: [
        "Natural Language Processing",
        "Machine Learning Pipelines",
        "Text Vectorization",
        "Similarity Ranking",
        "Model Interpretability"
      ],
      whyBuilt:
        "I wanted to explore practical machine learning applications while understanding the fundamentals behind text classification and ranking systems. The project allowed me to build an explainable NLP pipeline from the ground up.",
      futureApplications:
        "Could be expanded with embeddings, LLM-based ranking, personalized job recommendations, and automated career assistance workflows.",
      github: "https://github.com/owenmoloney/resume-classifier"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false // Commented out section
};

// Blogs Section

const blogSection = {
  display: false // Commented out section
};

// Talks Sections

const talkSection = {
  display: false // Commented out section
};

// Podcast Section

const podcastSection = {
  display: false // Commented out section
};

// Resume Section
const resumeSection = {
  //title: "Resume",
  //subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "omoloney@fordham.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
