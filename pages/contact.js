import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/FooterDiv/Footer";
import Contact from "../Components/Contact/Contact";

const ContactUs = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar/>
    <Contact/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
