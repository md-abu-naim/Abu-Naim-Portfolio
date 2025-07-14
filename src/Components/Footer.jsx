
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center p-2 text-2xl text- font-bold">MOHAMMAD ABU NAIM</h1>
            </div>
            <footer className="footer footer-center">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by <span className="text-[#C39C5D]">Mohammad Abu Naim</span></p>
                </aside>
            </footer>
        </footer>
    );
};

export default Footer;