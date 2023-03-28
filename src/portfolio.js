const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Khalil Acheche | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions ",
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
  logo_name: "Khalil Achache",
  resumeLink: "https://go.epfl.ch/aarash_cv",
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
      profileLink: "https://www.linkedin.com/in/khalil-acheche/",
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
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Numpy, Matplotlib, Seaborn, Plotly & Scikit-learn",
        "⚡ Experience with various Machine Learning algorithms such as Logistic Regression, K-Nearest Neighbors, K-Means Clustering, Support Vector Machines, LSTMs, Transformers etc.",
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
        "⚡ Experience in responsive websites using HTML5, CSS3, ReactJS & NodeJS",
        "⚡ Experience in developing Android applications using Java & Android Studio",
        "⚡ Experience in developing cross-platform applications using Java & JavaFX",
        "⚡ Experience in developing 2D & 3D games using Unity",
        "⚡ Experience in backend development using NodeJS & Express"
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
        "⚡ Designing and developing autonomous robots using Arduino & Raspberry Pi",
        "⚡ Experience in designing and developing 3D models using AutoDesk Fusion 360",
        "⚡ Experience in designing electronic circuits using Fritzing",
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
    "Here are some of the projects I have worked on. These projects were built either individually or in a team. Some are part of courses, some are personal projects and some are just for fun! They are all open source and available on my Github. I have also included a link to the live demo of the project. Feel free to check them out!",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]

const resumeleft = {
  left: [{
    title: ["Work Experience"],
    data: [
      {
        title: "Freelance Developer",
        subtitle: "Poseidon, EPFL, Switzerland",
        date: "April 2022 - Now",
        content: [
          "Maintained and imporved a custom software application for scheduling shifts and managing workloads for IT support team members at EPFL.",
          "Collaborated with other members of the IT support team to identify areas for process improvement and to develop and implement new technologies to improve productivity and efficiency.",
          "Worked independently and as part of a team, managing multiple projects and priorities simultaneously while ensuring timely delivery of high-quality work products.",
          "Communicated effectively with team members and stakeholders, providing regular progress updates and soliciting feedback to ensure that software development projects met the requirements and expectations.",
        ],
      },
      {
        title: "VR Research Intern",
        subtitle: "Immersive Interaction Group, EPFL, Switzerland",
        date: "July 2022 - September 2022",
        content: [
          "Worked on a project to develop an experimental study to better understsand the sentiment of embodiment in VR",
          "Optimized an existing avatar movement module using tracking sensors to improve the feeling of embodiment in VR, resulting in enhanced accuracy and a more immersive experience for users.The improved module was subsequently implemented by colleagues in other VR projects.",
        ],
      },
      {
        title: "Embedded Systems Developer",
        subtitle: "MakerLab, Sousse, Tunisia",
        date: "July 2019 - September 2019",
        content: [
          "Collaborated with a team of 4 to develop and test embedded systems modules for private clients during an internship at an embedded systems company.",
          "Designed and developed firmware for various embedded systems",
          "Conducted hardware testing and troubleshooting to ensure that the embedded systems met the clients' requirements and specifications.",
          "Coordinated with the team to ensure that the project deliverables were completed on time and met the highest standards of quality.",
          "Gained valuable experience working in a fast-paced and dynamic team environment, while also building technical skills in embedded systems design and testing.",
        ],
      },
      {
        title: "Game Dev Instructor",
        subtitle: "GoMyCode, Tunis, Tunisia",
        date: "July 2017 - August 2017",
        content: [
          "Taught the basics of programming and game development with Unity to a group of 70 students.",
          "Facilitated engaging and interactive classes that fostered an inclusive and collaborative learning environment, resulting in high levels of student engagement and participation.",
          "Provided individualized feedback to help students improve their skills and achieve their learning goals.",
          "Gained valuable teaching experience and developed strong communication and interpersonal skills through working with students and collaborating with fellow instructors."
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
        date: "September 2021 - Now",
        content: [
          "Providing IT support to students, faculty, and staff at EPFL, diagnosing and resolving a range of technical problems, including hardware and software issues, network connectivity problems in a timely and efficient manner.",
          "Demonstrating problem-solving and analytical skills, working under pressure to resolve complex technical issues.",
          "Maintaining accurate documentation of support requests and their resolutions, using tracking systems and other tools to monitor progress and ensure that all issues are resolved to the satisfaction of users.",
          "Work collaboratively with other members of the IT support team, sharing knowledge and expertise to improve the overall quality of service delivery.",
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
          subtitle: "Immersive Interaction Group, EPFL, Switzerland",
          content: [
            "Designed and conducted an experiment to investigate cybersickness, collecting data and utilizing it to train a machine learning model capable of predicting its onset.",
            "Presented findings from the data analysis at a VR conference workshop, including the use of electroencephalography(EEG) as an objective measure for identifying cybersickness.",
            "The work contributes to ongoing efforts to improve the design and user experience of VR applications, as well as to the development of objective methods for quantifying cybersickness."
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
