import { Link } from "react-router-dom";

const Navber = () => {

    const links = <>
        <li><Link to='/' className="uppercase">Skills</Link></li>
        <li><Link to='/' className="uppercase">Projects</Link></li>
        <li><Link to='/' className="uppercase">Study</Link></li>
        <li><Link to='/' className="uppercase">Blogs</Link></li>
        <li><Link to='/' className="uppercase">Testimonials</Link></li>
        <li><Link to='/' className="uppercase">Contacts</Link></li>
    </>
    return (
        <div className="navbar bg-[#C39C5D] text-black px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu font-bold menu-sm dropdown-content bg-[#C39C5D] rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn font-bold btn-ghost text-2xl">ABU NAIM</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="group relative inline-flex h-12 items-center justify-center rounded-full bg-black px-6 font-medium text-white hover:animate-pulse "><span>HIRE ME</span><div className="relative ml-1 h-5 w-5 overflow-hidden group-hover:animate-bounce"><div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" ></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" ></path></svg></div></div></button>
                
            </div>
        </div>
    );
};

export default Navber;