import { ProjectDetails, TechUsed } from "../types/projectTypes";
export const projectDetails: ProjectDetails[] = [
    {
        id: 1,
        title: "Memi Image Gallery",
        img: "/memiPage.png",
        description: `Memi is a React-based web gallery that allows users to upload, store, 
        and search images by title, tags, and upload date. 
        It features JWT token-based authentication for secure access, 
        uses Amazon S3 for image storage, and leverages RTK Query for efficient API interactions.`,
        githubLink:
            "https://github.com/rajas19-ita/Memi-Image-App-Frontend-React.git",
        liveLink: "https://memi-gallery.netlify.app/",
        techUsed: [
            {
                name: "AWS",
                logo: "/awsLogo.png",
                width: "w-12",
            },
            {
                name: "React",
                logo: "/react.svg",
            },
            {
                name: "Redux",
                logo: "/reduxLogo.png",
            },
            {
                name: "Express",
                logo: "/expressLogo.png",
            },
        ],
    },
    {
        id: 2,
        title: "Weather App",
        img: "/weatherApp.png",
        description: `Weather App built with React that provides real-time weather updates. 
        Users can search for any location to view current conditions, three-hour forecasts, and 
        daily outlooks for the upcoming days.`,
        techUsed: [
            { name: "React", logo: "/react.svg" },
            { name: "Tailwind CSS", logo: "/tailwindLogo.png" },
        ],
        githubLink: "https://github.com/rajas19-ita/weather_app_react.git",
        liveLink: "https://wethr-app-r.netlify.app/",
    },
    {
        id: 3,
        title: "Landing Page",
        img: "/landingPage.png",
        description: `Responsive landing page with carousel`,
        techUsed: [
            { name: "Html", logo: "/htmlLogo.png" },
            { name: "Css", logo: "/cssLogo.png" },
            { name: "Js", logo: "/jsLogo.png" },
        ],
        githubLink:
            "https://github.com/rajas19-ita/Frontend-Mentor-Manage-landing-page.git",
        liveLink: "https://fmc-page.netlify.app/",
    },
];

export const skills: TechUsed[] = [
    { name: "JavaScript", logo: "/jsLogo.png" },
    { name: "Html", logo: "/htmlLogo.png" },
    { name: "Css", logo: "/cssLogo.png" },
    { name: "React", logo: "/reactLogo.png" },
    { name: "Redux", logo: "/reduxLogo.png" },
    { name: "Node.js", logo: "/nodeLogo.png" },
    { name: "Python", logo: "/pythonLogo.png" },
    { name: "Django", logo: "/djangoLogo.png" },
];
