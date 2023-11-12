// Search.jsx

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import "tailwindcss/tailwind.css";
import styles from "./Search.module.css";

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
    <div className={styles.searchDiv}>
      <form onSubmit={handleSearch} className={styles.maxWScreenMd}>
        <div className={styles.searchCols}>
        <div className={styles.firstDiv}>
          <div className={styles.icon}>
            <AiOutlineSearch className={styles.text25} />
            <input
              type="text"
              value={searchData.jobTitle}
              onChange={(e) => handleInputChange(e)}
              name="jobTitle"
              className={styles.inputSearch}
              placeholder="Search Job Here..."
            />
          </div>
          <div className={styles.icon}>
            <BsHouseDoor className={styles.text25} />
            <input
              type="text"
              value={searchData.company}
              onChange={(e) => handleInputChange(e)}
              name="company"
              className={styles.inputSearch}
              placeholder="Search By Company..."
            />
          </div>
          <div className={styles.icon}>
            <CiLocationOn className={styles.text25} />
            <input
              type="text"
              value={searchData.location}
              onChange={(e) => handleInputChange(e)}
              name="location"
              className={styles.inputSearch}
              placeholder="Search By location..."
            />
          </div>
        </div>

        <div className={styles.secDiv}>
          <div className={styles.singleSearch}>
            <label htmlFor="relevance" className={styles.text808080}>
              Sort by:
            </label>
            <select
              name="sort"
              value={searchData.sort}
              onChange={(e) => handleInputChange(e)}
              className={styles.optionSearch}
            >
              <option value="Pertinence">Pertinence</option>
              <option value="Date de publication">Date de publication</option>
            </select>
          </div>
          <div className={styles.singleSearch}>
            <label htmlFor="type" className={styles.text808080}>
              Type:
            </label>
            <select
              name="type"
              value={searchData.type}
              onChange={(e) => handleInputChange(e)}
              className={styles.optionSearch}
            >
              <option value="CDD">CDD</option>
              <option value="CDI">CDI</option>
              <option value="Saisonnier">Saisonnier</option>
            </select>
          </div>
          <div className={styles.singleSearch}>
            <label htmlFor="level" className={styles.text808080}>
              Level:
            </label>
            <select
              name="level"
              value={searchData.level}
              onChange={(e) => handleInputChange(e)}
              className={styles.optionSearch}
            >
              <option value="Débutant">Débutant</option>
              <option value="Junior">Junior</option>
              <option value="Confirmé">Confirmé</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>
        </div>
       
        <div className={styles.submit}>
          <div className={styles.clear}>
            <span
              className={styles.clearSpan}
              onClick={handleClearAll}
            >
              Clear All
            </span>
          </div>
          <div className={styles.search}>
            <button
              type="submit"
              className={styles.searchButton}
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
