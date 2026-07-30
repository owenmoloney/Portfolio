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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/medical-logo.svg").default || require("./assets/images/medical-logo.svg"),
      projectName: "MEDMMO",
      projectDesc: "A web application for managing medical records for a hospital.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://storm.cis.fordham.edu/~mballard7/medical-records-swe/medical-records-deploy/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/trashLogo.avif"),
      projectName: "Smart Waste Management System",
      projectDesc: "A C++ simulator that models and optimizes janitorial waste collection using multiple scheduling algorithms and priority-based task management.",
      descBullets: [
        "Built a C++17 simulator modeling janitorial waste management, implementing FCFS, SJF, and dynamic PRIORITY scheduling using bin attributes (fill, weight, moisture, distance, aging) to optimize task assignment.",
        "Generated per-bin metrics and visualized schedules with ASCII Gantt charts, using file output to preserve alignment for complex, multi-hour timelines.",
        "Enabled fully tunable priority weights via CLI, integrating modular code for parsing, scheduling, and metrics while collaborating on debugging, testing, and documentation."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/owenmoloney/smart-waste-platform"
        }
      ]
    },
    {
      image: require("./assets/images/Estimate_Pro.png"),
      projectName: "Floor Estimate Pro",
      projectDesc: "Java desktop application that detects voids in floor-plan geometry and calculates square-footage and cost estimates, replacing a fully manual takeoff process. In continuous production use since 2023.",
      descBullets: [
        "Built a void-detection algorithm handling irregular, non-rectangular floor shapes and unusable-space adjustments.",
        "Structured the codebase so new material types and shape rules can be added without breaking existing estimate calculations.",
        "In active production use, cutting 50+ hours of manual estimating time per quarter for a real wood flooring business."
      ],
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/owenmoloney/floor-estimate-pro" }
      ]
    },
    {
      image: require("./assets/images/Resume_Class.png"),
      projectName: "Resume Classifier",
      projectDesc: "End-to-end resume-to-job matching pipeline using TF-IDF vectorization, Naive Bayes category classification, and cosine similarity ranking to shortlist candidates against job postings.",
      descBullets: [
        "Built a shared TF-IDF vector space so resumes and job postings can be directly compared despite differing vocabulary.",
        "Used Naive Bayes to classify resumes into job categories before ranking within each category by cosine similarity.",
        "Chose a classical NLP pipeline (TF-IDF + Naive Bayes) over embedding-based approaches for interpretability and low compute cost at this scale."
      ],
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/owenmoloney/resume-classifier" }
      ]
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
