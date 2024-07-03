import { useEffect, useState } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [tools, setTools] = useState()

    useEffect(() => {
        fetch('/Skills.json')
        .then(res => res.json())
        .then(data => {
            setSkills(data)
        })
    }, [])

    useEffect(() => {
        fetch('/Tools.json')
        .then(res => res.json())
        .then(data => {
            setTools(data)
        })
    }, [])
    return (
        <div id='skills' className="py-16 md:px-24">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">My Skills</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5  mx-auto p-5 mt-8'>
                {
                    skills?.map(skill => <div key={skill.name} className=" hover:border border-[#C39C5D] hover:scale-[1.05] rounded-lg p-6 transition-all bg-[#1B1616]">
                        <div className='flex items-center justify-center flex-col'>
                            <img src={skill.image} className='w-16 h-16' alt="" />
                        </div>
                        <h3 className='pt-4 text-xl text-center'>{skill.name}</h3>
                    </div>)
                }
            </div>
            <div className=" flex items-center justify-center mt-14">
                <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">Tools</h1>
            </div>
            <div className='grid p-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5  mx-auto mt-8'>
                {
                    tools?.map(tool => <div key={tool.name} className=" hover:border border-[#C39C5D] hover:scale-[1.05] rounded-lg p-6 transition-all bg-[#1B1616]">
                        <div className='flex items-center justify-center flex-col'>
                            <img src={tool.image} className='w-16 h-16' alt="" />
                        </div>
                        <h3 className='pt-4 text-xl text-center'>{tool.name}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;