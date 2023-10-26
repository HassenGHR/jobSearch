import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar flex justify-between items-center p-6 md:p-10 lg:p-10 xl:p10">
      <div className="flex items-center">
        <div className="logoDiv">
          <h1 className="logo text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </div>
      </div>
      <div className={`menu md:flex flex-col md:flex-row gap-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
          <Link href="/">Jobs</Link>
        </li>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
          <Link href="/companies"> Companies</Link>
        </li>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
          <Link href="/about"> About</Link>
        </li>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
          <Link href="/contact"> Contact</Link>
        </li>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
          <Link href="/blog"> Blog</Link>
        </li>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
        <Link href="/login"> Login</Link>
          </li>
        <li className="menueList text-[#6f6f6f] hover:text-blueColor">
        <Link href="/register"> Register</Link>
        </li>
      </div>
      <div className="menuIcon md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="navBar flex flex-col md:flex-row justify-between items-center p-6 md:p-10 lg:p-14 xl:p-20">
//       <div className="logoDiv">
//         <h1 className="logo text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blueColor">
//           <strong>Job</strong>Search
//         </h1>
//       </div>
//       <div className={`menu md:flex flex-col md:flex-row gap-4 ${isOpen ? 'block' : 'hidden'}`}>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//           <Link href="/">Jobs</Link>
//         </li>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//           <Link href="/companies"> Companies</Link>
//         </li>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//           <Link href="/about"> About</Link>
//         </li>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//           <Link href="/contact"> Contact</Link>
//         </li>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//           <Link href="/blog"> Blog</Link>
//         </li>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//         <Link href="/login"> Login</Link>
//           </li>
//         <li className="menueList text-[#6f6f6f] hover:text-blueColor">
//         <Link href="/register"> Register</Link>
          
//         </li>
//       </div>
//       <div className="menuIcon md:hidden cursor-pointer" onClick={toggleMenu}>
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           {isOpen ? (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           ) : (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           )}
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
