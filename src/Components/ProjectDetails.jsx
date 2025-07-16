import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const ProjectDetails = () => {
    const [projects, setProjects] = useState([])
    const { name } = useParams()
    const project = projects?.find(project => project.name === name)
    const { name: projectName, image, url, client, server, description, features, technologies } = project || {}
    console.log(project);
    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, [])
    return (
        // <div className="card lg:w-[1000px] border-[#C39C5D] border-t-0 border md:w-[700px] mx-auto mt-16 shadow-xl lg:space-x-14">
        //     <div className=" w-full text-center">
        //         <figure><a href={url} target='_blank'><img className="w-[300px] border border-[#C39C5D] border-t-0 md:w-[650px] lg:w-[850px] md:h-[500px] h-full rounded-3xl" src={image} alt="Album" /></a></figure>
        //     </div>
        //     <div className="card-body">
        //         <h2 className="card-title mb-5 font-bold text-3xl md:text-5xl text-[#C39C5D]">{projectName}</h2>
        //         <div className='flex justify-between flex-col md:flex-row border-y-2  py-4'>
        //             <div className="flex flex-col md:flex-row">
        //                 <span className="font-bold pr-2 text-[#C39C5D]">Technologies: </span>
        //                 <ul className="grid grid-cols-2 md:grid-cols-4  ">
        //                     {technologies?.map((technology, i) => <li key={i} className=" font-medium px-4">{technology}</li>)}
        //                 </ul>
        //             </div> 
        //         </div>

        //         <div className="pt-0 border-b-2  pb-3">
        //             <spn className="font-bold text-[#C39C5D]">Description : </spn><span >{description}</span>
        //             <div className="flex flex-col md:flex-row">
        //                 <span className="font-bold pr-2 text-[#C39C5D]">Features : </span>
        //                 <ul className=" ">
        //                     {features?.map((feature, i) => <li className='space-y-2' key={i} >● {feature}</li>)}
        //                 </ul>
        //             </div>                 </div>
        //         <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-6 ">
        //             {
        //                 server && <a href={server} target='_blank' className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
        //                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        //                 <span className="relative w-full text-left transition-colors text-black duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Server Side</span>
        //             </a>
        //             }
        //             <a href={url} target='_blank' className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
        //                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        //                 <span className="relative w-full text-left transition-colors text-black duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Live Link</span>
        //             </a>
        //             <a href={client} target='_blank' className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
        //                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        //                 <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Client Side</span>
        //             </a>
        //         </div>
        //     </div>
        // </div>

        <section>

            <section className='bg-gray-900 text-gray-100 min-h-screen px-4 md:px-10 py-16'>
                <div className='grid md:grid-cols-2 border border-gray-400 rounded-xl p-5 gap-10 items-center max-w-7xl mx-auto'>
                    <div>
                        <img src={image} alt={name} className='w-full h-auto rounded-xl border border-gray-700' />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-4 border-b-2 inline-block border-gray-400 pb-1">{name}</h1>
                        <p className='text-gray-400 mb-6 text-justify'>{description}</p>
                        <div className='mb-4'>
                            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                            <ul className='list-disc list-inside space-y-1 text-gray-400'>
                                {
                                    features?.map((feature, index) => <li key={index}>{feature}</li>)
                                }
                            </ul>
                        </div>
                        <div className='mb-4'>
                            <h2 className="text-xl font-semibold mb-2">Technologies:</h2>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    technologies?.map((technology, i) => (
                                        <span key={i} className='bg-gray-800 border border-gray-400 text-sm rounded-full px-3 py-1'>{technology}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 text-gray-100 min-h-screen px-4 md:px-10 py-16">
                <div className="grid md:grid-cols-2 border border-gray-400 rounded-xl p-5 gap-10 items-center max-w-7xl mx-auto">
                    {/* Right: Content */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4 border-b-2 inline-block border-yellow-500 pb-1">
                            {name}
                        </h1>
                        <p className="text-gray-300 mb-6 text-justify">{description}</p>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2 text-yellow-400">Key Features:</h2>
                            {/* <ul className="list-disc list-inside space-y-1 text-gray-400">
                                {features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul> */}
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2 text-yellow-400">Technologies:</h2>
                            {/* <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-800 border border-yellow-600 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div> */}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <a href={url} target="_blank" rel="noreferrer" className="px-5 py-2 bg-yellow-600 text-black font-semibold rounded hover:bg-yellow-500 transition">
                                Live Site
                            </a>
                            {client && (
                                <a href={client} target="_blank" rel="noreferrer" className="px-5 py-2 border border-yellow-600 rounded hover:bg-yellow-700 transition">
                                    Client Code
                                </a>
                            )}
                            {server && (
                                <a href={server} target="_blank" rel="noreferrer" className="px-5 py-2 border border-yellow-600 rounded hover:bg-yellow-700 transition">
                                    Server Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProjectDetails;