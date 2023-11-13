import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import Louder from "../Louder/Louder";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Jobs.module.css"; 

const Jobs = (props) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(props.offers);
  const jobsPerPage = 9; 

  const imageDefault = "/logos/default.jpg";

  function calculateRelevanceScore(job, jobTitle, location, company) {
  
    let relevanceScore = 0;

   
    if (job.title.toLowerCase().includes(jobTitle.toLowerCase())) {
      relevanceScore += 10;
    }

    
    if (job.location.toLowerCase().includes(location.toLowerCase())) {
      relevanceScore += 3;
    }

 
    if (job.company.toLowerCase() === company.toLowerCase()) {
      relevanceScore += 5;
    }

    return relevanceScore;
  }
  const { jobTitle, company, location, sortSearch, type, level } =
    props.queryData;
  useEffect(() => {
    setCurrentPage(1);
  }, [jobTitle, company, location, sortSearch, type, level]);

  useEffect(() => {
 
    const filteredJobs = props.offers.filter((job) => {
      const jobMatchesCriteria =
        (!jobTitle ||
          job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (!company ||
          job.company.toLowerCase().includes(company.toLowerCase())) &&
        (!location ||
          job.location.toLowerCase().includes(location.toLowerCase()));

      const typeMatchesCriteria =
        !type || job.type.toLowerCase() === type.toLowerCase();

      const experience = +job.experience;

      let levelMatchesCriteria = true;

      if (experience !== null) {
        if (level === "Débutant") {
          levelMatchesCriteria = job.experience >= 0 && job.experience <= 1;
        } else if (level === "Junior") {
          levelMatchesCriteria = job.experience >= 2 && job.experience <= 4;
        } else if (level === "Confirmé") {
          levelMatchesCriteria = job.experience >= 5 && job.experience <= 9;
        } else if (level === "Senior") {
          levelMatchesCriteria = job.experience >= 10;
        }
      } else {
        levelMatchesCriteria = true;
      }

   
      return jobMatchesCriteria && typeMatchesCriteria && levelMatchesCriteria;
    });

    if (sortSearch === "Date de publication") {
      const sortedJobs = [...filteredJobs];
      sortedJobs.sort((a, b) => new Date(b.time) - new Date(a.time));
      setSearchResults(sortedJobs);
    } else if (sortSearch === "Pertinence") {
      const scoredJobs = filteredJobs.map((job) => {
        const relevanceScore = calculateRelevanceScore(
          job,
          jobTitle,
          location,
          company
        );
        return { ...job, relevanceScore };
      });

      // Sort the scored jobs by relevance
      scoredJobs.sort((a, b) => b.relevanceScore - a.relevanceScore);

      // Update the search results in the parent component
      setSearchResults(scoredJobs);
    } else {
      // If no sorting option is selected, set searchResults to filteredJobs
      setSearchResults(filteredJobs);
    }
    setLoading(false);
  }, [props.queryData, props.offers]);
  // const jobsPerPage = 9;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const totalPages = Math.ceil(searchResults.length / jobsPerPage);
  const jobsToDisplay = searchResults.slice(startIndex, endIndex);
  const router = useRouter();

  useEffect(() => {
    if (currentPage == 2) {
      router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/?currentPage=${currentPage}`);
    }
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const previousPage = currentPage - 1;
      router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/?currentPage=${previousPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const nextPage = currentPage + 1;
      router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/?currentPage=${nextPage}`);
    }
  };

  function capitalizeFirstLetter(text) {
    const textCapitalize = text
      .toLowerCase()
      .replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2);

    return textCapitalize.length > 22
      ? textCapitalize.slice(0, 22) + "..."
      : textCapitalize;
  }

  const showDetailsHandler = (item) => {
    router.push({
      pathname: `/${item.id}`,
    });
  };
  const maxPaginationButtons = 7; // Maximum number of pagination buttons to display

  const generatePaginationButtons = () => {
    if (totalPages <= maxPaginationButtons) {
      // If there are fewer pages than the maximum, display all page buttons
      return Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <button
            className={`${styles.currentBtn} ${
              index + 1 === currentPage ? styles.currentBtnColor : ""
            }`}
            onClick={() => {
              const selectedPage = index + 1;
              setCurrentPage(selectedPage);
              router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/?currentPage=${selectedPage}`);
            }}
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
            className={`${styles.currentBtn} ${
              startPage + index === currentPage ? styles.currentBtnColor : ""
            }`}
            onClick={() => {
              const selectedPage = startPage + index;
              setCurrentPage(selectedPage);
              router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/?currentPage=${selectedPage}`);
            }}
          >
            {startPage + index}
          </button>
        </li>
      ));
    }
  };
  

  return (
    <div>
      {loading ? (
        <Louder />
      ) : (
        <div>
          <div className={styles.jobContainer}>
            {jobsToDisplay.length > 0 ? (
              jobsToDisplay.map((item) => (
                <div
                  key={item.id}
                  className={styles.singleJob}
                  onClick={() => showDetailsHandler(item)}
                >
                  <span className="flex justify-between items-center gap-4">
                    <h1 className={styles.jobTitle}>
                      {item.title.length > 20
                        ? item.title.slice(0, 20) + "..."
                        : item.title}
                    </h1>
                  </span>
                  <h6 className={styles.jobLocation}>
                    <MdLocationPin /> {capitalizeFirstLetter(item.location)}
                  </h6>
                  <div className="company flex items-center gap-2 p-2">
                    <div className={styles.imageContainer}>
                      {item.image && item.image !== "" ? (
                        <img
                          src={item.image}
                          alt="Company Logo"
                          className={styles.image}
                        />
                      ) : (
                        <img
                          src={imageDefault}
                          alt="Company Logo"
                          className={styles.image}
                        />
                      )}
                    </div>
                    <span className={styles.companyName}>
                      {capitalizeFirstLetter(item.company)}
                    </span>
                  </div>
                  <div className={styles.jobDetails}>
                    <div className={styles.jobTime}>
                      <BiTimeFive /> {item.time}
                    </div>
                  </div>
                  <button className={styles.applyButton}>
                    <Link href={`/${item.id}`}>Apply Now</Link>
                  </button>
                </div>
              ))
            ) : (
              <div className="emptyJob text-center mt-8">
                <h2 className="text-2xl font-semibold text-textColor">
                  No jobs found matching your criteria.
                </h2>
              </div>
            )}
          </div>

          {jobsToDisplay.length > 0 && (
            <div className={styles.pagination}>
              <button
                className={`${styles.paginationButton} mr-2`}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <ul className={styles.currentContainer}>
      {generatePaginationButtons()}
    </ul>              <button
                className={`${styles.paginationButton} ml-2`}
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

export default Jobs;
