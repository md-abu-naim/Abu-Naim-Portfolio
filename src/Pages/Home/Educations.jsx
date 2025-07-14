import { FaEye } from "react-icons/fa";

const Educations = () => {
    return (
        <div id="educations" className="md:px-24 mt-16">
            <h2 className="text-3xl font-bold">Educations</h2>
            <div className="flex  gap-2 pt-3">
                <div className="border-t-4 border-[#C39C5D] w-16"></div>
                <div>
                    <h3 className="text-xl text-[#C39C5D] font-medium">M.A. (Masters) Certificate</h3>
                    <p>AL-Jamiatul Ahliya Darul Uloom Muinul Islam</p>
                    <p className="font-sans">2025 - 2026</p>
                    <p>GPA: Running</p>
                </div>
            </div>
            <div className="flex  gap-2 pt-3">
                <div className="border-t-4 border-[#C39C5D] w-16"></div>
                <div>
                    <h3 className="text-xl text-[#C39C5D] font-medium">B.A. (Honours) Certificate</h3>
                    <p>Jamia Mohammadia Khajuria Madrasha</p>
                    <p className="font-sans">2021 - 2024</p>
                    <p>GPA: 4.00 (A+)</p>
                </div>
            </div>
            <div className="flex  gap-2 pt-3">
                <div className="border-t-4 border-[#C39C5D] w-16"></div>
                <div>
                    <h3 className="text-xl text-[#C39C5D] font-medium">Complete Web Development Course</h3>
                    <p>Programming Hero                    </p>
                    <p className="font-sans">December 2023 - June 2024</p>
                    <a href='https://drive.google.com/file/d/1KNoKEhqFePHyphD9spusWV-MKbOAMf0R/view?usp=sharing' target="_blank" className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-white items-center italic">Certificate <FaEye /></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Educations;


