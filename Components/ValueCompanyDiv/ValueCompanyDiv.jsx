import React from "react";
import "tailwindcss/tailwind.css";

const ValueCompany = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      
      <div className="card1 mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Ready to Showcase Your Company?
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Get Started Today!
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ValueCompany;
