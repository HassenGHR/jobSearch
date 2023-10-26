import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/FooterDiv/Footer";

const ContactUs = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar/>
      <div className="container mx-auto py-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">Contact Us</h1>
          <p className="text-lg mb-6">
            We would love to hear from you! Whether you have questions,
            feedback, or just want to say hello, feel free to get in touch with
            us using the form below.
          </p>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-2 border rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full mt-2 p-2 border rounded"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
