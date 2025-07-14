
// const About = () => {
//     return (
//         <div className="md:px-24">
//             <h2 className="text-3xl font-bold">About</h2>
//             <div className="flex gap-2 pt-3">
//                 <div className="border-t-4 border-[#C39C5D] w-32"></div>
//                 <div>
//                     <p>A versatile developer with expertise in web design, front-end development, and full-stack development using the MERN stack. I am passionate about creating responsive and user-friendly web applications using React.js. With a keen eye for design and a focus on improved user experience, I excel at turning complex problems into simple, beautiful, and intuitive solutions.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
import img from '/assets/file.png';

const About = () => {
    return (
        <section id="about" className="bg-gray-900 text-white px-4 py-16 md:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Text */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="border-t-4 border-[#C39C5D] w-20 mb-6"></div>
                    <p className="text-[#D3C6A5] leading-relaxed text-lg">
                        I’m <span className="text-[#C39C5D] font-semibold">Abu Naim</span>, a dedicated and creative frontend web developer passionate about building user-friendly and elegant websites. With strong proficiency in <span className="text-white font-semibold">React, Tailwind CSS, HTML, CSS, and JavaScript</span>, I focus on clean UI and pixel-perfect designs.
                    </p>
                    <p className="text-[#D3C6A5] leading-relaxed text-lg mt-4">
                        I also have hands-on experience with backend technologies like <span className="text-white font-semibold">Node.js, Express.js, and MongoDB</span>. I love solving problems and learning new technologies to build impactful projects.
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-[#C39C5D]">
                        <img src={img} alt="About Abu Naim" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

        
        </section>
    );
};

export default About;


