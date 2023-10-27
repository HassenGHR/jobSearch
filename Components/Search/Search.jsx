import React, { useState } from "react";



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
    <div className="searchDiv flex flex-col items-center md:flex-row md:items-center bg-blue-200 rounded-lg p-10 md:p-5 space-y-4 md:space-y-0 md:space-x-4 justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 max-w-[600px] mx-auto">
        <input
          type="text"
          name="company"
          value={searchCompData.company}
          onChange={(e) => handleInputChange(e)}
          className="rounded h-[40px] p-2 border border-gray-300 placeholder-gray-500"
          placeholder="Keywords ..."
          autoComplete="off"
        />
        <input
          type="text"
          name="location"
          value={searchCompData.location}
          onChange={(e) => handleInputChange(e)}
          className="rounded h-[40px] p-2 border border-gray-300 placeholder-gray-500"
          placeholder="Places, region, state..."
          autoComplete="off"
        />
        <select
          value={searchCompData.sectors}
          onChange={(e) => handleInputChange(e)}
          name="sectors"
          className="rounded h-[40px] p-2 border border-gray-300"
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
      </div>
        <button className="bg-blueColor h-[40px] p-1 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300" onClick={handleSearch}>

        Search
      </button>
    </div>
  );
};

export default SearchFields;
