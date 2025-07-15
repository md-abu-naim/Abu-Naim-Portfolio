import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiPostman, SiVercel } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
];

export default frontendSkills

export const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

export const tools = [
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-indigo-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];