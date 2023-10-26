import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import Louder from "../Louder/Louder";
import { useRouter } from "next/router";
import Link from "next/link";
// import { imageDefault } from "../../public/logos/default.jpg";

const Jobs = (props) => {

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(props.offers);
  const jobsPerPage = 9; // Number of jobs to display per page

  const imageDefault = "/logos/default.jpg";

  function calculateRelevanceScore(job, jobTitle, location, company) {
    // Define your scoring logic here
    let relevanceScore = 0;

    // Example: Increase score if job title matches
    if (job.title.toLowerCase().includes(jobTitle.toLowerCase())) {
      relevanceScore += 10;
    }

    // Example: Increase score if location matches
    if (job.location.toLowerCase().includes(location.toLowerCase())) {
      relevanceScore += 3;
    }

    // Example: Increase score if type matches
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
    // Filter jobs based on search criteria
    const filteredJobs = props.offers.filter((job) => {
      const jobMatchesCriteria =
        (!jobTitle ||
          job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (!company ||
          job.company.toLowerCase().includes(company.toLowerCase())) &&
        (!location ||
          job.location.toLowerCase().includes(location.toLowerCase()));

      // Additional filtering based on the 'type' parameter
      const typeMatchesCriteria =
        !type || job.type.toLowerCase() === type.toLowerCase();

      const experience = +job.experience;

      let levelMatchesCriteria = true;

      if (experience !== null ) {
        // Determine the experience level based on the criteria
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
        // If experience is null, exclude the levelMatchesCriteria check
        levelMatchesCriteria = true;
      }

      // Display jobs that match jobMatchesCriteria, typeMatchesCriteria,
      // and levelMatchesCriteria (based on experience level)
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
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const previousPage = currentPage - 1;
      router.push(`http://localhost:3001/?currentPage=${previousPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const nextPage = currentPage + 1
      router.push(`http://localhost:3001/?currentPage=${nextPage}`);
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

  return (
    <div>
      {loading ? (
        <Louder />
      ) : (
        <div>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            {jobsToDisplay.length > 0
              ? jobsToDisplay.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="group group/item singleJob w-[300px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
                    >
                      <span className="flex justify-between items-center gap-4">
                        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                          {item.title.length > 20
                            ? item.title.slice(0, 20) + "..."
                            : item.title}
                        </h1>
                      </span>
                      <h6 className="text-[#ccc] flex items-center gap-2">
                        <MdLocationPin /> {capitalizeFirstLetter(item.location)}
                      </h6>
                      <div className="company flex items-center gap-2 p-2">
                        <div className="image-container w-[70px] h-[70px] border border-gray-500 rounded-lg shadow-md p-1">
                          {item.image && item.image !== "" ? (
                            <img
                              src={item.image}
                              alt="Company Logo"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <img
                              src={imageDefault}
                              alt="Company Logo"
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <span className="text-[14px] py-[2rem] block group-hover:text-white">
                          {capitalizeFirstLetter(item.company)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center gap-4 p-3 ">
                        <div className="flex items-center text-[#cc] gap-1 text-sm ">
                          <BiTimeFive /> {item.time}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          showDetailsHandler(item);
                        }}
                        className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white"
                      >
                        <Link href={`/${item.id}`}>Apply Now</Link>
                      </button>
                    </div>
                  );
                })
              : <div className="text-center mt-8">
              <h2 className="text-2xl font-semibold text-textColor">
                No jobs found matching your criteria.
              </h2>
            </div>}
          </div>

          {jobsToDisplay.length > 0 && (
            // Render pagination only if there are search results
            <div className="pagination flex justify-center mt-4">
              <button
                className="mr-2 p-2 rounded-full border hover:bg-blue-500 hover:text-white"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <ul className="flex gap-2">{generatePaginationButtons()}</ul>
              <button
                className="ml-2 p-2 rounded-full border hover:bg-blue-500 hover:text-white"
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
