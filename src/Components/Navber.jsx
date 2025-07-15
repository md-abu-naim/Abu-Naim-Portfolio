import { Link } from "react-router-dom";

const Navber = () => {

    const links = <>
        <li><a href="#skills" className="uppercase">Skills</a></li>
        <li><a href="#projects" className="uppercase">Projects</a></li>
        <li><a href="#educations" className="uppercase">Educations</a></li>
        {/* <li><a href="#blogs" className="uppercase">Blogs</a></li>
        <li><a href="#testimonial" className="uppercase">Testimonials</a></li> */}
        <li><a href="#contacts" className="uppercase">Contacts</a></li>
    </>
    return (
        <div className="navbar bg-[#C39C5D] text-black md:px-16">
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
                <Link to="/" className="btn font-bold btn-ghost md:text-2xl text-xl">ABU NAIM</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="#contacts" className="group relative inline-flex h-12 items-center justify-center rounded-full bg-black px-3 md:px-6 font-medium text-white hover:animate-pulse "><span>Hire Me</span><div className="relative ml-1 h-5 w-5 overflow-hidden group-hover:animate-bounce"><div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" ></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" ></path></svg></div></div></a>
                
            </div>
        </div>
    );
};

export default Navber;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navber = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { href: "#skills", label: "Skills" },
//     { href: "#projects", label: "Projects" },
//     { href: "#educations", label: "Educations" },
//     { href: "#contacts", label: "Contacts" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-slate-900 text-slate-50 shadow-lg">
//       <nav className="navbar px-4 md:px-16 flex justify-between items-center h-20">
//         {/* Logo + Mobile Menu Toggle */}
//         <div className="flex items-center space-x-4">
//           {/* Mobile hamburger */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="btn btn-ghost lg:hidden p-2"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   isOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>

//           {/* Logo + Tagline */}
//           <Link to="/" className="flex flex-col leading-none">
//             <span className="text-2xl md:text-3xl font-bold tracking-wide">
//               Mohammad Abu Naim
//             </span>
//             <small className="text-sm font-medium text-slate-400">
//               Full-Stack Web Developer
//             </small>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex space-x-8 font-semibold uppercase text-slate-200">
//           {navLinks.map(({ href, label }) => (
//             <li key={href}>
//               <a
//                 href={href}
//                 className="hover:text-indigo-400 transition-colors duration-300"
//               >
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hire Me CTA */}
//         <div className="hidden md:flex">
//           <a
//             href="#contacts"
//             className="bg-gray-500 hover:bg-gray-800 text-white font-semibold px-5 py-2 rounded-full shadow hover:shadow-xl transition duration-300"
//           >
//             Hire Me
//           </a>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <ul className="lg:hidden bg-slate-800 text-slate-50 font-semibold space-y-2 px-4 pb-4 pt-2 uppercase">
//           {navLinks.map(({ href, label }) => (
//             <li key={href}>
//               <a
//                 href={href}
//                 className="block py-2 px-4 rounded hover:bg-slate-700 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// };

// export default Navber;

