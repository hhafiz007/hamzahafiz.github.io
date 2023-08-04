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
  username: "Hamza",
  title: "Hi, I'm Hamza",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Flask and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vYlp2pDqTt6lfMFTu5g56MN1cqyDdhBu/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hhafiz007",
  linkedin: "https://www.linkedin.com/in/hamza-hafiz/",
  gmail: "hamzahafiz87@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND BUILD SCALABLE SYSTEMS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as IBM/ AWS / Digital Ocean / MongoDB"
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
      schoolName: "State University of New York at Buffalo",
      logo: require("./assets/images/ub.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - December 2023",
      descBullets: [
        "Information Retrieval",
        "Analysis of Algorithms",
        "Pattern Recognition",
        "Project Management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python, C++, C, Solidity", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Javascript, ReactJS, Express, Flask, Truffle ",
      progressPercentage: "70%"
    },
    {
      Stack: "MongoDB, PostgresSQL, Solr, Cloudant",
      progressPercentage: "60%"
    },
    {
      Stack: "Docker, Kubernetes, AWS, IBM",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Accessium Group Inc.",
      companylogo: require("./assets/images/accessium.jpeg"),
      date: "June 2023 – Present",
      desc: " Implemented a robust Python server-client architecture, allowing clients to effortlessly establish connections, \
      transmit patient demographics securely into Corepoint for further integration with HL7 formatting. Optimized Corepoint data \
      processing and transformation, meeting individual client needs and expediting Detailed Financial Transaction creation, leading to \
      significant time savings and effort."
    },
    {
      role: "Software Engineer",
      company: "Larsen & Toubro Infotech",
      companylogo: require("./assets/images/lti.jpeg"),
      date: "November 2020 – July 2022",
      descBullets: [
        ": Pioneered end-to-end design and development of IT Web Portal for seamless enterprise experience offering a personalized and multi-persona experience, using Angular, JavaScript, SQL enhancing employee experience by 20%.",
        "Automation and streamlining of data import and visualization processes for Portland General Electronics by integrating NOZOMI Intrusion Detection System with through REST API and Angular"
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
  projects: [
    {
      projectName: "MULTI-TOPIC INFORMATION RETRIEVAL CHATBOT",
      projectDesc: "◦ Designed a versatile multilingual chatbot using Python, powered by an Index hosted on SOLR VSM / BM25 Cores, and \
      implemented various data structures like skip pointers for efficient searching. Created a Flask App to facilitate seamless querying through REST API and incorporated React for a user-friendly Front-end. Leveraged BERT for efficient post-processing and utilized Tableau for comprehensive conversation analysis.",
    
    },
    {
      
      projectName: "AirPredict",
      projectDesc: "Developed a powerful property rental platform with Postgres backend, empowering users to access and filter a diverse range of \
      rental properties. Implemented EDA and advanced ML models to ensure accurate property price predictions, benefitting both \
      renters and owners in making informed decisions about rental rates",
      
    },
    {
      
      projectName: "UB Online Dictionary",
      projectDesc: "Curated an extensive collection of over 125,000 words from Wiktionary using Python for preprocessing and NLP models like \
      NLTK and SpaCy. Leveraged MongoDB as the backend for seamless data storage and retrieval. Integrated Wikimedia APIs to \
      enable automatic addition of new words to the dictionary",
      
    },
    {
      
      projectName: "Healthcareium",
      projectDesc: " Developed of a healthcare application utilizing blockchain technology to enhance patient data transparency, insurance \
      transparency, and health data security.\
      Proficiently implemented the application using Node.js, HTML, CSS, Truffle, Ganache, Solidity, and Remix, ensuring seamless \
      functionality and robust performance. \
       ",
      
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Techie",
      subtitle:
        "Won the best Techie award during training period in LTI",
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-7165472370",
  email_address: "hamzaha2@buffalo.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
