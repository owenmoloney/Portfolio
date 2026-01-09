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
    "I am a passionate Full Stack Software Developer with experience building web and mobile applications using JavaScript, React.js, Node.js, React Native, and other modern libraries and frameworks." ),
  resumeLink:
    "https://drive.google.com/file/d/1XQLIiHs3knHb_0Sz_tK8REm2EKY5YNFx/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "ASPIRING FULL STACK DEVELOPER WHO HAS A DIVERSE STACK BACKGROUND & EAGER TO LEARN MORE",
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
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
        "Implemented role-based access control with protected routes, separating admin and client functionality using Firebase JWT authentication."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Alpha Prime Tech",
      companylogo: require("./assets/images/alphaprimetech_logo.jpeg"),
      date: "May 2024 – August 2024",
      desc: "Completed 90+ hours of professionally instructed Java training, gaining hands-on experience with industry-standard practices and how Java and other languages are applied in real-world software projects."
    },
    {
      role: "Lifeguard & Swim Instructor",
      company: "Douglaston Yacht Club",
      companylogo: require("./assets/images/douglstonLogo.png"),
      date: "June 2020 – August 2025",
      desc: "Served as a lifeguard, swim instructor, and coach over multiple summers, leading classes, teams, and safety operations at The Douglaston Club.",
      descBullets: [
        "Instructed and organized swim lessons, swim coaching sessions, and aqua aerobics classes, ensuring all participants followed proper techniques.",
        "Maintained strict pool safety, supervising swimmers and managing lifeguard and junior coach teams with full attentiveness for hours at a time.",
        "Mentored and trained younger lifeguards and assistant instructors, improving team efficiency and safety standards.",
        "Coached hundreds of children over three years, leading the swim team to three 2nd-place finishes in a competitive league."
      ]
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false // Commented out section
};
// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

const blogSection = {
  display: false // Commented out section
};
// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  display: false // Commented out section
};
// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

const podcastSection = {
  display: false // Commented out section
};
// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

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
  number: "+1 (917) 681-2295",
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
  techStack,
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
