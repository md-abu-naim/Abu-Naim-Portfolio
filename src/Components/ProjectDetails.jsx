import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProjectDetails = () => {
    const [projects, setProjects] = useState([])
    const {name} = useParams()
    const project = projects?.find(project => project.name === name)
    const {name: projectName, image, url, client, server, description, features, technologies} = project || {}

    useEffect(() => {
        fetch('/Projects.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    },[])
    return (
        <div className="card lg:w-[1000px] border-[#C39C5D] border-t-0 border md:w-[700px] mx-auto mt-16 shadow-xl lg:space-x-14">
            <div className=" w-full text-center">
                <figure><img className="w-[300px] border border-[#C39C5D] border-t-0 md:w-[650px] lg:w-[850px] md:h-[500px] h-full rounded-3xl" src={image} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title mb-5 font-bold text-3xl md:text-5xl text-[#C39C5D]">{projectName}</h2>
                <div className='flex justify-between flex-col md:flex-row border-y-2  py-4'>
                    <div className="flex flex-col md:flex-row">
                        <span className="font-bold pr-2 text-[#C39C5D]">Technologies: </span>
                        <ul className="grid grid-cols-2 md:grid-cols-4  ">
                            {technologies?.map((technology, i) => <li key={i} className=" font-medium px-4">{technology}</li>)}
                        </ul>
                    </div> 
                </div>
                
                <div className="pt-0 border-b-2  pb-3">
                    <spn className="font-bold text-[#C39C5D]">Description : </spn><span >{description}</span>
                    <div className="flex flex-col md:flex-row">
                        <span className="font-bold pr-2 text-[#C39C5D]">Features : </span>
                        <ul className=" ">
                            {features?.map((feature, i) => <li className='space-y-2' key={i} >● {feature}</li>)}
                        </ul>
                    </div>                 </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-6 ">
                    <a href={server} target='_blank' className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left transition-colors text-black duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Server Side</span>
                    </a>
                    <a href={url} target='_blank' className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left transition-colors text-black duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Live Link</span>
                    </a>
                    <a href={client} target='_blank' className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Client Side</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;