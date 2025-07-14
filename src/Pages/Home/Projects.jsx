// import { useEffect, useState } from 'react';
// import { FaLink } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// const Projects = () => {
//     const [projects, setProjects] = useState([])

//     useEffect(() => {
//         fetch('/Projects.json')
//             .then(res => res.json())
//             .then(data => {
//                 setProjects(data);
//             })
//     }, [])
//     return (
//         <section id='projects' className=" md:px-16">
//             <div className=" flex items-center justify-center">
//                 <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">Latest Projects</h1>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 '>
//                 {
//                     projects?.map(project => <div key={project.name} className="max-w-md px-4 mb-7 text-white">
//                         <h2 className="text-2xl mb-2 text-center font-bold italic">{project.name}</h2>
//                         <img className=' border-[#C59D5F] h-[430px] border rounded-sm' src={project.image} alt={project.name} />
//                         <div className='flex items-center justify-center flex-row gap-14 mt-2'>
//                             <a href={project.url} target="_blank" className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
//                                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                                 <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">View Live <FaLink /></span>
//                             </a>
//                             <Link to={`/${project.name}`} className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
//                                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                                 <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">View Details</span>
//                             </Link>
//                         </div>
//                     </div>)
//                 }
//             </div>
//         </section>
//     );
// };

// export default Projects;

const Projects = () => {
    const projects = [
        {
            title: "ScharHub - Study Platform",
            image: "https://i.postimg.cc/Y9WNFKjw/granny-restaurent.jpg",
            description: "Full-stack study platform for students and tutors.",
            liveLink: "https://scharhub.vercel.app",
        },
        {
            title: "NatureGlow - Skincare Store",
            image: "https://i.postimg.cc/Y9WNFKjw/granny-restaurent.jpg",
            description: "Organic skincare e-commerce with admin and user dashboards.",
            liveLink: "#",
        },
        {
            title: "NatureGlow - Skincare Store",
            image: "https://i.postimg.cc/Y9WNFKjw/granny-restaurent.jpg",
            description: "Organic skincare e-commerce with admin and user dashboards.",
            liveLink: "#",
        },
    ];

    return (
        <section id="projects" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Latest Projects
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-400 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="text-gray-400 mt-2 mb-5">{project.description}</p>

                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-[#C39C5D] hover:text-black transition"
                                    >
                                        Live Site
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-[#C39C5D] hover:text-black transition"
                                    >
                                        Source Code
                                    </a>
                                    <button
                                        className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-600  transition"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

