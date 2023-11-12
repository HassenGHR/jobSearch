// SearchFields.js
import React, { useState } from "react";
import styles from "./SearchFields.module.css";

const SearchFields = (props) => {
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
          placeholder="Keywords ..."
          autoComplete="off"
        />
        <input
          type="text"
          name="location"
          value={searchCompData.location}
          onChange={(e) => handleInputChange(e)}
          className={styles.inputField}
          placeholder="Places, region, state..."
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
