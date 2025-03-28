import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import img from '../../assets/file.png'

const Banner = () => {
    const fileID = '18RFkRvRDoaLLeoGlZt5KMkMtxThjTSqC'
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID}`;

    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = downloadURL;
        a.download = 'yourfile.pdf'; // You can set a custom filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <div>
            <section className=" text-white  ">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
                        <h1 className="md:text-3xl text-xl mt-8 md:mt-0 font-bold md:leading-[50px]">Hello! Welcome <br /> I’m <span className='text-[#C39C5D] md:text-5xl text-4xl uppercase'>Abu Naim</span> </h1>
                        <p className="mt-4 md:w-[550px] mx-auto ">I am Abu Naim. I am a frontend developer. I create website with my skills and expertise which will help to cool your eyes. And I also have idea about backend like Node.js Express.js MongoDB</p>
                        <div className="flex gap-4 mt-4 flex-col md:flex-row items-center justify-center lg:justify-start">
                            <div className="flex gap-4 items-center justify-center">
                                <a href="https://www.linkedin.com/in/md-abu-naim/" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative text-2xl"><FaLinkedin /></span>
                                </a >
                                <a href="https://github.com/md-abu-naim" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative text-2xl"><FaGithub /></span>
                                </a >
                                <a href="https://www.facebook.com/farhanadnan.farabi.5" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative text-2xl"><FaFacebook /></span>
                                </a >
                            </div>
                            <div>
                                <button onClick={handleDownload} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2  font-bold group-hover:text-white items-center italic">GET RESUME <FaDownload /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={img} alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;