// SearchFields.js
import React, { useEffect, useState } from "react";
import styles from "./SearchFields.module.css";
import { useRouter } from 'next/router';


const SearchFields = (props) => {
  const router = useRouter(); // Get the router object

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(props.page);
  }, [props.page]);
  const secteursC = props.secteurs
    .map((comp) => {
      const secteur = comp.secteur;
      const valuesAfterHyphen = secteur.split("-")[1];
      return valuesAfterHyphen
        ? valuesAfterHyphen
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase())
        : null;
    })
    .filter(Boolean)
    .filter((value, index, self) => self.indexOf(value) === index);

  const [searchCompData, setSearchCompData] = useState({
    company: "",
    location: "",
    sectors: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCompData((prevSearchData) => ({
      ...prevSearchData,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    props.setSearchCompData(searchCompData);
    const queryParams = {
      currentPage,
      prop1: searchCompData.company,
      prop2: searchCompData.location,
      prop3: searchCompData.sectors,
    };

    // Use the router object to navigate to the specified link
    router.push({
      pathname: '/companies',
      query: queryParams,
    });
  
    setSearchCompData({
      company: "",
      location: "",
      sectors: "",
    });
  };

  return (
    <div className={styles.searchDiv}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="company"
          value={searchCompData.company}
          onChange={(e) => handleInputChange(e)}
          className={styles.inputField}
          placeholder="Company Name"
          autoComplete="off"
        />
        <input
          type="text"
          name="location"
          value={searchCompData.location}
          onChange={(e) => handleInputChange(e)}
          className={styles.inputField}
          placeholder="Location"
          autoComplete="off"
        />
        <select
          value={searchCompData.sectors}
          onChange={(e) => handleInputChange(e)}
          name="sectors"
          className={styles.selectField}
        >
          <option value="" disabled>
            Field of activity
          </option>
          {secteursC.map((secteur, index) => (
            <option key={index} value={secteur}>
              {secteur}
            </option>
          ))}
        </select>
       
          <button className={styles.button} onClick={handleSearch}>
            Search
          </button>
      </div>
    </div>
  );
};

export default SearchFields;
