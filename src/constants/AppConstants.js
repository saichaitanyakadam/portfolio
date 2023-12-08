import covidDahsboard from "../assets/covidDashboard.png";
import moneyMatters from "../assets/moneyMatters.png";
import rpsProject from "../assets/rpsproject.png";
import jobbyProject from "../assets/jobbyProject.png";
import nxtTrendz from "../assets/nxtTrendz.png";

export const PersonalDetails = [
  {
    content: "Sai Chaitanya",
    label: "First Name",
    id: 1,
  },
  {
    content: "Kadam",
    label: "Last Name",
    id: 2,
  },
  {
    content: "06-07-2001",
    label: "DOB",
    id: 3,
  },
  {
    label: "Address",
    id: 4,
    content: "1-26/1, Sonpally, Sirikonda, Adilabad, Telangana, 504307",
  },
  {
    content: "saichaitanyakadam@gmail.com",
    label: "Email",
    id: 5,
  },
  {
    content: 6301542266,
    label: "Mobile Number",
    id: 6,
  },
];

export const technicalSkills = [
  {
    label: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "BOOTSTRAP",
      "javascript",
      "react.js",
      "tailwindCss",
    ],
  },
  { label: "Backend", skills: ["python", "node.js", "express.js"] },
  {
    label: "Databases",
    skills: ["sqlite"],
  },
];

export const Certificates = [
  {
    id: 1,
    title: "React Js",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/react-js?id=DQAIIOFAGD",
    issuedOn: "APR 2023",
  },
  {
    id: 2,
    title: "Node Js",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/node-js?id=GXMLSRJZFC",
    issuedOn: "FEB 2023",
  },
  {
    id: 3,
    title: "Developer Foundations",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=HFUBGYMPQO",
    issuedOn: "JAN 2023",
  },
  {
    id: 4,
    title: "Introduction to Databases",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=JDYPSBBSXP",
    issuedOn: "JAN 2023",
  },
  {
    id: 5,
    title: "JavaScript Essentials",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=FVXEJVEYVF",
    issuedOn: "JAN 2023",
  },
  {
    id: 6,
    title: "Responsive Web Design using Flexbox",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=UWFSFFKRAI",
    issuedOn: "JAN 2023",
  },
  {
    id: 7,
    title: "Build Your Own Dynamic Web Application",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=HLWQJVPMDS",
    issuedOn: "DEC 2022",
  },
  {
    id: 8,
    title: "Programming Foundations with Python",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=TDNCVJEMOH",
    issuedOn: "NOV 2022",
  },
  {
    id: 9,
    title: "Build Your Own Responsive Website",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=MMXUXTOATH",
    issuedOn: "SEP 2022",
  },
  {
    id: 10,
    title: "Build Your Own Static WebsiteBuild Your Own Static Website",
    provider: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/static-website?id=CTEVZYXBMQ",
    issuedOn: "SEP 2022",
  },
];

export const EducationDetails = [
  {
    id: 1,
    institution: "NxtWave",
    course: "Certification",
    from: 2022,
    to: 2023,
    department: "Full-Stack Development certification course",
    gradeSystem: undefined,
    score: undefined,
    overallScore: undefined,
  },
  {
    id: 2,
    institution: "Jb Institute of Engineering and Technology, Hyderabad",
    course: "B.Tech",
    department: "Civil Engineering",
    from: 2018,
    to: 2022,
    gradeSystem: "CGPA",
    score: 6.74,
    overallScore: 10.0,
  },
  {
    id: 3,
    institution: "Sr Junior College, Hanumakonda",
    course: "Intermediate",
    department: "MPC",
    gradeSystem: "Percentage",
    from: 2016,
    to: 2018,
    score: 93.7,
    overallScore: 100,
  },
  {
    id: 4,
    institution: "Sri Vidyaranya Avasa Vidyalayam, Mancherial",
    course: "SSC",
    department: "SSC",
    gradeSystem: "CGPA",
    from: 2015,
    to: 2016,
    score: 9.5,
    overallScore: 10.0,
  },
];

export const ProjectsData = [
  {
    id: 1,
    title: "Covid-19 Dashboard",
    skills: ["react.js", "html", "css", "javascript"],
    link: "https://cdkadam.ccbp.tech/",
    credentials: "",
    img: covidDahsboard,
  },
  {
    id: 2,
    title: "Money-Matters",
    skills: [
      "react.js",
      "bootstarp",
      "html",
      "css",
      "javaScipt",
      "protected routing",
    ],
    link: "https://mmkadam.ccbp.tech/",
    credentials: { username: "admin@gmail.com", password: "Admin@123" },
    img: moneyMatters,
  },
  {
    id: 3,
    title: "Rock-Paper-Sciccors",
    skills: ["react.js", "html", "css", "styledComponents", "javaScipt"],
    link: "https://rpskadam.ccbp.tech/",
    img: rpsProject,
  },
  {
    id: 4,
    title: "Jobby App",
    skills: [
      "react.js",
      "html",
      "css",
      "javaScript",
      "styledComponents",
      "protected routing",
    ],
    link: "https://jobby.ccbp.tech/",
    img: jobbyProject,
    credentials: { username: "rahul", password: "rahul@2021" },
  },
  {
    id: 5,
    title: "Nxt Trendz",
    skills: [
      "react.js",
      "html",
      "css",
      "javaScript",
      "contextApi",
      "protected routing",
    ],
    link: "https://nxt-trendz-kadam.netlify.app/",
    img: nxtTrendz,
    credentials: { username: "rahul", password: "rahul@2021" },
  },
];
