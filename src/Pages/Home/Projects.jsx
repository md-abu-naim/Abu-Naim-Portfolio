import { useEffect, useState } from 'react';
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
        <section>

            <section id='projects' className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-bold text-center mb-7'>Latest Projects</h2>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                   {
                    projects.map(p => (
                         <div key={p.name} className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-400 rounded-xl overflow-hidden hover:shadow-lg transition duration-300'>
                        <img src={p.image} alt="" className='w-full h-56 object-cover' />
                        <div className='p-5'>
                            <h3 className='text-xl font-semibold text-white'>{p.name}</h3>
                            <p className='text-gray-400 mt-2 mb-5'>{p.description}</p>
                            <div className='flex flex-wrap gap-3'>
                                <a href={p.url} target='_blank' className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Live Site</a>
                                <a href={p.client} target='_blank'  className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Source Code</a>
                                <Link to={`details/${p.name}`} className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Details</Link>
                            </div>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </section>
        </section>
    );
};

export default Projects;

