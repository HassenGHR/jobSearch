import React from "react";
import "tailwindcss/tailwind.css";

const Value = () => {
  return (
    <div className="mb-8 md:mb-16 lg:mb-20">
      <h1 className="text-textColor text-2xl md:text-3xl lg:text-4xl py-4 md:py-6 pb-5 font-bold max-w-screen-md mx-auto">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto max-w-screen-lg">
        <div className="singleGrid rounded-md hover:bg-[#f7edf5] p-4 md:p-6">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-4 rounded-md bg-[#dedef8] h-10 w-10 flex items-center justify-center">
              <img src="/logos/istock.png" alt="" className="w-7/10" />
            </div>
            <span className="font-semibold text-textColor text-base md:text-xl">
              Simplicity
            </span>
          </div>
          <p className="text-sm md:text-base text-textColor opacity-70 py-2 font-semibold">
            Things being made beautifully simple are at the heart of everything we do.
          </p>
        </div>
        <div className="singleGrid rounded-md hover:bg-[#eeedf7] p-4 md:p-6">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-4 rounded-md bg-[#dedef8] h-10 w-10 flex items-center justify-center">
              <img src="/logos/love.png" alt="" className="w-7/10" />
            </div>
            <span className="font-semibold text-textColor text-base md:text-xl">
              Accessibility
            </span>
          </div>
          <p className="text-sm md:text-base text-textColor opacity-70 py-2 font-semibold">
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>
        <div className="singleGrid rounded-md hover:bg-[#fcfae3] p-4 md:p-6">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-4 rounded-md bg-[#f3f2ad] h-10 w-10 flex items-center justify-center">
              <img src="/logos/istock.png" alt="" className="w-7/10" />
            </div>
            <span className="font-semibold text-textColor text-base md:text-xl">
              Transparency
            </span>
          </div>
          <p className="text-sm md:text-base text-textColor opacity-70 py-2 font-semibold">
            We work on the basis of creating trust which can be nurtured through authenticity and transparency.
          </p>
        </div>
      </div>
      <div className="card mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row justify-between bg-blueColor p-10 rounded-md max-w-screen-md mx-auto">
        <div className="mb-4 md:mb-0">
          <h1 className="text-blueColor text-2xl md:text-3xl font-bold">
            Ready to switch a career?
          </h1>
          <h2 className="text-textColor text-xl md:text-2xl font-bold">
            Let's get started!
          </h2>
        </div>
        <button className="border-2 rounded-md py-2 px-8 text-lg font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
