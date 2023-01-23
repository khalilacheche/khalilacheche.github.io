const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Khalil Acheche | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Khalil's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Khalil Achache",
  logo_name: "Rohan Kokkula",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/khalilacheche",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/khalil-haroun-achache-8a5b42120",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      "idx": 0,
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and vision transformers",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      "idx": 1,
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "fa6-brands:unity",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "material-symbols:android",
          style: {
            color: "#78C257",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Robotics",
      fileName: "DesignImg",
      "idx": 2,
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00979C",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "logos:raspberry-pi",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "AutoDesk Fusion 360",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: {
            color: "#db7c23",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my own projects/projects I contributed to in a group collaboration. These projects were either done as a part of my college curriculum or as personal projects.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]

const resumeleft = {
  left: [{
    title: ["Work Experience"],
    data: [
      {
        title: "VR Research Intern",
        subtitle: "Immersive Interactive Group, EPFL, Switzerland",
        date: "July 2022 - September 2022",
        content: [
          "My role at Listnr included a lot of research work about Audio Encoders and Vocoders and Speech Synthesis in general.",
          "Worked on some SOTA Inference TTS Models such as TacoTron2, FastSpeech2, and Wavenet.",
          "Also had hands-on with real-time voice cloning algorithm.",
        ],
      },
      {
        title: "Embedded Systems Developer",
        subtitle: "MakerLab, Sousse, Tunisia",
        date: "July 2019 - September 2019",
        content: [
          "Phase 1 included Data Cleaning & Data Annotation for object detection task",
          "Used YOLO v5 for Fire Detection Project",
        ],
      },
      {
        title: "Game Dev Instructor",
        subtitle: "GoMyCode, Tunis, Tunisia",
        date: "July 2017 - August 2017",
        content: [
          "Learnt & applied various Machine Learning libraries",
          "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
          "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
          "Ranked 85 out of 1500+ students for overall performance.",
        ],
      },
    ],
  },
  {
    title: ["Job Experience"],
    data: [
      {
        title: "Level 1 Technical Support",
        subtitle: "Poseidon, Lausanne, Switzerland",
        content: [
          "Provided technical support to customers via phone, email, and chat",
        ],
      },
    ],
  },]
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "MSc in Data Science",
          subtitle: "EPFL, Lausanne, Switzerland",
          date: "2022 - current",
          content: [],
        },
        {
          title: "BSc in Computer Science",
          subtitle: "EPFL, Lausanne, Switzerland",
          date: "2019 - 2022",
          content: ["Grade: 5.09/6"],
        },
        {
          title: "CMS Preparatory Year",
          subtitle: "EPFL, Lausanne, Switzerland",
          date: "2018 - 2019",
          content: ["Grade: 5.14/6"],
        },
        {
          title: "Baccalaureate in Technology",
          subtitle: "Pioneer High School, Sousse, Tunisia",
          date: "2014 - 2018",
          content: ["Grade: 18.18/20"],
        },
      ],
    },
    {
      title: ["Research Experience"],
      data: [
        {
          title: "VR Cybersickness suscpetibility study",
          subtitle: "Immersive Interactive Group, EPFL, Switzerland",
          content: [
            "studied the effect of VR on the human body and the brain",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Feel free to reach out! :)",
  },
  addressSection: {
    title: "Currently based in",
    subtitle: "Lausanne, Switzerland",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/khalilacheche",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#B2BEB5", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/khalil-haroun-achache-8a5b42120",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@aar_ash/videos",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  certifications,
  resumeleft,
  resumeright,
};
