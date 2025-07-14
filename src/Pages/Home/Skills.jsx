// import { useEffect, useState } from 'react';

// const Skills = () => {
//     const [skills, setSkills] = useState([])
//     const [tools, setTools] = useState()

//     useEffect(() => {
//         fetch('/Skills.json')
//         .then(res => res.json())
//         .then(data => {
//             setSkills(data)
//         })
//     }, [])

//     useEffect(() => {
//         fetch('/Tools.json')
//         .then(res => res.json())
//         .then(data => {
//             setTools(data)
//         })
//     }, [])
//     return (
//         <section id='skills' className="py-16 md:px-24">
//             <div className=" flex items-center justify-center">
//                 <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">My Skills</h1>
//             </div>
//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5  mx-auto p-5 mt-8'>
//                 {
//                     skills?.map(skill => <div key={skill.name} className=" hover:border border-[#C39C5D] hover:scale-[1.05] rounded-lg p-6 transition-all bg-[#1B1616]">
//                         <div className='flex items-center justify-center flex-col'>
//                             <img src={skill.image} className='w-16 h-16' alt="" />
//                         </div>
//                         <h3 className='pt-4 text-xl text-center'>{skill.name}</h3>
//                     </div>)
//                 }
//             </div>
//             <div className=" flex items-center justify-center mt-8">
//                 <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">Tools</h1>
//             </div>
//             <div className='grid p-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8'>
//                 {
//                     tools?.map(tool => <div key={tool.name} className=" hover:border border-[#C39C5D] hover:scale-[1.05] rounded-lg p-6 transition-all bg-[#1B1616]">
//                         <div className='flex items-center justify-center flex-col'>
//                             <img src={tool.image} className='w-16 h-16' alt="" />
//                         </div>
//                         <h3 className='pt-4 text-xl text-center'>{tool.name}</h3>
//                     </div>)
//                 }
//             </div>
//         </section>
//     );
// };

// export default Skills;


// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//   { name: "React", icon: <FaReact className="text-sky-400" /> },
//   { name: "Node.js", icon: <FaNode className="text-green-500" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//   { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
//   { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-[#111111] text-white px-4 py-16 md:px-24">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-2">My Skills</h2>
//         <div className="border-t-4 border-[#C39C5D] w-20 mx-auto mb-10"></div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-[#1a1a1a] hover:bg-[#222222] border border-[#2a2a2a] rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-[#C39C5D] transition duration-300"
//             >
//               <div className="text-3xl">{skill.icon}</div>
//               <p className="font-semibold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



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

const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const tools = [
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-indigo-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-7">
                    My <span className="text-[#C39C5D]">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Frontend Skills */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#C39C5D] mb-4 border-b border-[#C39C5D] pb-2">Frontend</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6">
                            {frontendSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-950 hover:bg-[#222222] border border-gray-400 rounded-lg p-4 flex items-center justify-center gap-2 text-[#C39C5D] transition duration-300"
                                >
                                    <div className="text-3xl">{skill.icon}</div>
                                    <p className="font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#C39C5D] mb-4 border-b border-[#C39C5D] pb-2">Backend</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6">
                            {backendSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1a1a1a] hover:bg-[#222222] border border-[#2a2a2a] rounded-lg p-4 flex items-center justify-center gap-2 text-[#C39C5D] transition duration-300"
                                >
                                    <div className="text-3xl">{skill.icon}</div>
                                    <p className="font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="text-center">
                        <h3 className="text-xl font-semibold  mb-4 border-b border-[#C39C5D] pb-2 text-white">Tools</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1a1a1a] hover:bg-[#222222] border border-[#2a2a2a] rounded-lg p-4 flex items-center justify-center gap-2 text-[#C39C5D] transition duration-300"
                                >
                                    <div className="text-3xl">{tool.icon}</div>
                                    <p className="font-semibold">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
