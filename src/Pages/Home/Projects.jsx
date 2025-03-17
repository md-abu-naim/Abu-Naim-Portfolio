import { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    }, [])
    return (
        <div id='projects' className=" md:px-16">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">Latest Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 '>
                {
                    projects?.map(project => <div key={project.name} className="max-w-md px-4 text-white">
                        {/* <div className="card rounded-none">
                            <div className=" dropdown relative dropdown-hover rounded-md">
                                <div className="card-body flex items-center ">
                                    <h2 className="text-2xl text-center font-bold italic">{project.name}</h2>
                                </div>
                                <img className=' border-[#C59D5F] h-[430px] border rounded-sm' src={project.image} alt={project.name} />
                                <div className='flex items-center justify-center flex-col lg:flex-row gap-3 absolute space-y-2 top-20 lg:top-40 lg:left-8 left-14'>
                                    <a href={project.url} target="_blank" className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">View Live <FaLink /></span>
                                    </a>
                                    <Link to={`/${project.name}`} className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">View Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="card-body flex items-center ">
                            <h2 className="text-2xl text-center font-bold italic">{project.name}</h2>
                        </div>
                        <img className=' border-[#C59D5F] h-[430px] border rounded-sm' src={project.image} alt={project.name} />
                        <div className='flex items-center justify-center flex-col lg:flex-row gap-3 absolute space-y-2 top-20 lg:top-40 lg:left-8 left-14'>
                            <a href={project.url} target="_blank" className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">View Live <FaLink /></span>
                            </a>
                            <Link to={`/${project.name}`} className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">View Details</span>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;