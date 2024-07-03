import { useEffect, useState } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSkills(data)
        })
    }, [])
    return (
        <div className="py-16 md:px-24">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center border-b-2 border-[#C39C5D] p-2 text-3xl font-bold">My Skills</h1>
            </div>
            <div className='grid grid-cols-4 gap-5 max-w-2xl mx-auto mt-8'>
                {
                    skills?.map(skill => <div key={skill.name} className="w-40 hover:scale-[1.05] rounded-lg p-6 transition-all border-[#C39C5D] border hover:bg-[#1B1616]">
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
        </div>
    );
};

export default Skills;