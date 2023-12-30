import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BiSolidBusiness } from "react-icons/bi";
import Louder from "../Louder/Louder";
import { useRouter } from "next/router";
import styles from './Companies.module.css';

const DummyDataCard = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(props.data);
  const companiesPerPage = 8;
  const { company, location, sectors } = props.queryCompData;

  useEffect(() => {
    setCurrentPage(1);
  }, [company, location, sectors]);
 
 
  useEffect(() => {
    const filteredComps = props.data.filter((comp) => {
      const compMatchesCriteria =
        (!company ||
          comp.compName
            .split(" ")
            .some((word) =>
              company.toLowerCase().includes(word.toLowerCase())
            )) &&
        (!location ||
          comp.address2.toLowerCase().includes(location.toLowerCase())) &&
        (!sectors ||
          comp.secteur.toLowerCase().includes(sectors.toLowerCase()));
      return compMatchesCriteria;
    });
    setSearchResults(filteredComps);
    setLoading(false);
  }, [company, location, sectors, props.data]);

  // Number of comps to display per page

  const totalPages = Math.ceil(props.data.length / companiesPerPage);
  const startIndex = (currentPage - 1) * companiesPerPage;
  const endIndex = startIndex + companiesPerPage;

  const imageDefault = "/logos/default.jpg";
  const coverDefault = "/logos/coverDefault.png";

  const companiesToDisplay = searchResults.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const previousPage = currentPage - 1;
      router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/companies?currentPage=${previousPage}`);
      
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(currentPage + 1);
      router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/companies?currentPage=${nextPage}`);
    }
  };
  const maxPaginationButtons = 7;
  const generatePaginationButtons = () => {
    if (totalPages <= maxPaginationButtons) {
      // If there are fewer pages than the maximum, display all page buttons
      return Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <button
            className={`p-2 rounded-full border ${
              index + 1 === currentPage ? "bg-blueColor text-white" : ""
            } hover:bg-blue-500 hover:text-white`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ));
    } else {
      // Calculate the range of page buttons to display around the current page
      const startPage =
        currentPage <= maxPaginationButtons / 2
          ? 1
          : Math.max(currentPage - Math.floor(maxPaginationButtons / 2), 1);
      const endPage =
        startPage + maxPaginationButtons - 1 <= totalPages
          ? startPage + maxPaginationButtons - 1
          : totalPages;

      // Generate the pagination buttons for the calculated range
      return Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <li key={startPage + index}>
          <button
            className={`p-2 rounded-full border ${
              startPage + index === currentPage ? "bg-blueColor text-white" : ""
            } hover:bg-blue-500 hover:text-white`}
            onClick={() => setCurrentPage(startPage + index)}
          >
            {startPage + index}
          </button>
        </li>
      ));
    }
  };
  function capitalizeFirstLetter(text) {
    const textCapitalize = (text ?? "")
      .toLowerCase()
      .replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2);

    return textCapitalize.length > 22
      ? textCapitalize.slice(0, 22) + "..."
      : textCapitalize;
  }

  
  
  return (
    <div>
      {loading ? (
        <Louder />
      ) : (
        <div>
          <div className={styles.container}>
            <div className={styles.grid}>
              {companiesToDisplay.length > 0 ? (
                companiesToDisplay.map((item) => {
                  return (
                    <section
                      key={item.id}
                      className={styles.card}
                    >
                      <div
                        className={styles.defaultImage}
                        style={{
                          backgroundImage: `url(${item.cover || coverDefault})`,
                        }}
                      ></div>
                      <div className={styles.companyImage}>
                        <div className={styles.imageDiv}>
                          <a href="#">
                            <div className={styles.imageContainer}>
                              {item.photo && item.photo !== "" ? (
                                <img
                                  src={item.photo}
                                  alt="Company Logo"
                                  className={styles.wFull}
                                />
                              ) : (
                                <img
                                  src={imageDefault}
                                  alt="Company Logo"
                                  className={styles.logo}
                                />
                              )}
                            </div>
                          </a>
                        </div>
                        <div className={styles.companyName}>
                          <a href="#" className={styles.textLgFontSemibold}>
                            {capitalizeFirstLetter(item.compName)}
                          </a>
                        </div>
                        <p className={styles.ellipsis}>
                          <BiSolidBusiness />
                          {capitalizeFirstLetter(item.secteur.split("-")[1])}
                        </p>
                        <p className={styles.ellipsis}>
                          <MdLocationPin />
                          {item.address2 && capitalizeFirstLetter(item.address2)}
                        </p>
                        <p className={styles.ellipsis}>
                          <HiUserGroup />
                          {item.totalAvailablePlaceCount > 1
                            ? `job offers ${item.totalAvailablePlaceCount}`
                            : `job offer ${item.totalAvailablePlaceCount}`}
                        </p>
                        <a
                          href="#"
                          className={styles.viewOffers}
                        >
                          View Offers
                        </a>
                      </div>
                    </section>
                  );
                })
              ) : (
                <div className={styles.noResults}>
                  <h2 className={styles.noResultsText}>
                    No companies found matching your criteria.
                  </h2>
                </div>
              )}
            </div>
          </div>
          {companiesToDisplay.length > 0 && (
            <div className={styles.pagination}>
              <button
                className={styles.paginationButton}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <ul className={styles.paginationList}>{generatePaginationButtons()}</ul>
              <button
                className={styles.paginationButton}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
  
};

export default DummyDataCard;
