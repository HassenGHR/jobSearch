import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/FooterDiv/Footer";

const About = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
        <Navbar/>
        <div className="container mx-auto py-16 flex items-center">
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-semibold mb-8">About Us</h1>
        <p className="text-lg mb-4">
          At JobSearch, we are dedicated to helping job seekers find their dream
          jobs and employers connect with talented individuals. Our platform
          simplifies the job search process and empowers companies to discover
          the best candidates.
        </p>
        <p className="text-lg mb-4">
          With a user-friendly interface and powerful search features, we make
          it easy for you to navigate through countless job listings and find
          the perfect opportunity. Whether you're a recent graduate looking for
          your first job or an experienced professional seeking a new challenge,
          we've got you covered.
        </p>
        <p className="text-lg mb-2 ">
          Our mission is to bridge the gap between job seekers and employers,
          providing a seamless experience for both parties. Join us today and
          embark on a journey to shape your career or find your ideal candidate.
        </p>
      </div>
      <div className="w-1/2">
        <img
          src='/logos/jobs-og-image.png/'
          alt="About Us"
          className="w-full rounded shadow"
        />
      </div>
    </div>
        <Footer/>
    </div>
    
  );
};

export default About;
