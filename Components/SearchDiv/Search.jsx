import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import "tailwindcss/tailwind.css";

const Search = (props) => {
  const [searchData, setSearchData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    sort: "Date de publication",
    type: "CDD",
    level: "Débutant",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    props.setSearchData(searchData);
  };

  const handleClearAll = () => {
    setSearchData({
      jobTitle: "",
      company: "",
      location: "",
      sort: "Date de publication",
      type: "CDD",
      level: "Débutant",
    });
  };

  return (
<div className="searchDiv grid gap-10 bg-blue-200 rounded-[10px] p-[2rem] max-w-[900px] mx-auto">
      <form onSubmit={handleSearch} className="max-w-screen-md mx-auto">
        <div className="firstDiv grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex  gap-2">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              value={searchData.jobTitle}
              onChange={(e) => handleInputChange(e)}
              name="jobTitle"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Job Here..."
            />
          </div>
          <div className="flex items-center gap-2">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              value={searchData.company}
              onChange={(e) => handleInputChange(e)}
              name="company"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search By Company..."
            />
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              value={searchData.location}
              onChange={(e) => handleInputChange(e)}
              name="location"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search By location..."
            />
          </div>
        </div>

        <div className="secDiv md:flex md:grid-cols-3 items-center p-[.5rem] gap-3 md:gap-0 justify-center md:justify-center">
          <div className="singleSearch flex items-center gap-2 p-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name="sort"
              value={searchData.sort}
              onChange={(e) => handleInputChange(e)}
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="Pertinence">Pertinence</option>
              <option value="Date de publication">Date de publication</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2 p-2">
            <label htmlFor="type" className="text-[#808080] font-semibold">
              Type:
            </label>
            <select
              name="type"
              value={searchData.type}
              onChange={(e) => handleInputChange(e)}
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="CDD">CDD</option>
              <option value="CDI">CDI</option>
              <option value="Saisonnier">Saisonnier</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2 p-2">
            <label htmlFor="level" className="text-[#808080] font-semibold">
              Level:
            </label>
            <select
              name="level"
              value={searchData.level}
              onChange={(e) => handleInputChange(e)}
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="Débutant">Débutant</option>
              <option value="Junior">Junior</option>
              <option value="Confirmé">Confirmé</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>
        <div className="flex grid-col-1 md:justify-end  gap-3 justify-end ">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <span
              className="text-[#808080] cursor-pointer"
              onClick={handleClearAll}
            >
              Clear All
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
