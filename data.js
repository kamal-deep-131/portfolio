import { FaCode, FaServer, FaGithub, FaComments, FaUserTie } from 'react-icons/fa';

export const projectData = [
    {
        name: "Bright Side - An Idea Sharing Platform",
        description: "Bright Side is a dynamic MERN stack application offering a robust platform for idea sharing. It features JWT authentication, secure password hashing with bcrypt, and a user-friendly interface for seamless idea management and interaction.",
        img: "/images/bright-side.png",
        demoLink: "https://bright-side.vercel.app/",
        githubLink: "https://github.com/kamal-deep-131/mern"
    },
    {
        name: "Beehome - A Real Estate Portal",
        description: "Behome is a sleek React and Firebase app featuring beautiful UI with Tailwind CSS. It supports email/password and Google authentication, password management, and profile handling, showcasing efficient state management and real-time data fetching.",
        img: "/images/beehome.png",
        demoLink: "https://beehome-131.vercel.app/",
        githubLink: "https://github.com/kamal-deep-131/beehome"
    }
]

export const skillData = [
    {
        skillName: 'Frontend Development',
        skillDescription: 'Building visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and React.',
        icon: FaCode,
    },
    {
        skillName: 'Backend Development',
        skillDescription: 'Developing server-side logic, databases, and APIs to support web applications.',
        icon: FaServer,
    },
    {
        skillName: 'Git and GitHub',
        skillDescription: 'Version control and collaboration using Git for tracking changes in source code and GitHub for hosting repositories.',
        icon: FaGithub,
    },
    {
        skillName: 'Communication Skills',
        skillDescription: 'Effectively conveying information and ideas through various channels and ensuring clear understanding.',
        icon: FaComments,
    },

];