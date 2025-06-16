
const Footer = () => {
    return (
        <div className="bg-[#1B1616] py-6">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center p-2 text-2xl text-[#C39C5D] font-bold">ABU NAIM</h1>
            </div>
            <footer className="footer footer-center">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by <span className="text-[#C39C5D]">Mohammad Abu Naim</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;