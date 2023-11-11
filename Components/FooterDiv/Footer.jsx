import React from "react";
import "tailwindcss/tailwind.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div
    className="footer p-4 md:p-8 lg:p-12 bg-blueColor rounded-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center mb-8 max-w-screen-lg mx-auto"
    >
      {/* Column 1 */}
      <div className="mb-4 md:mb-0">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-2 md:pb-4">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white opacity-70 text-sm md:text-base">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates
        </p>
      </div>

      {/* Column 2 */}
      <div className="mb-4 md:mb-0">
        <span className="divTitle text-[18px] font-semibold pb-2 md:pb-4 text-white">
          Company
        </span>
        <ul className="grid gap-2 text-sm md:text-base">
          <li className="text-white opacity-70 hover:opacity-100">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="mb-4 md:mb-0">
        <span className="divTitle text-[18px] font-semibold pb-2 md:pb-4 text-white">
          Resources
        </span>
        <ul className="grid gap-2 text-sm md:text-base">
          <li className="text-white opacity-70 hover:opacity-100">Account</li>
          <li className="text-white opacity-70 hover:opacity-100">
            Support Center
          </li>
          <li className="text-white opacity-70 hover:opacity-100">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100">
            Contact Us
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <span className="divTitle text-[18px] font-semibold pb-2 md:pb-4 text-white">
          Support
        </span>
        <ul className="grid gap-2 text-sm md:text-base">
          <li className="text-white opacity-70 hover:opacity-100">Events</li>
          <li className="text-white opacity-70 hover:opacity-100">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100">Req Demo</li>
          <li className="text-white opacity-70 hover:opacity-100">Careers</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div>
        <span className="divTitle text-[18px] font-semibold pb-2 md:pb-4 text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white block mb-2">
            testEmail@gmail.com
          </small>
          <div className="icons flex gap-4">
            <AiFillInstagram className="bg-white p-3 h-12 w-12 rounded-full flex items-center justify-center text-blueColor" />
            <BsFacebook className="bg-white p-3 h-12 w-12 rounded-full flex items-center justify-center text-blueColor" />
            <AiOutlineTwitter className="bg-white p-3 h-12 w-12 rounded-full flex items-center justify-center text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
