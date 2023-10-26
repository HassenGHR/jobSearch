import React from "react";
import Navbar from "../NavBar/Navbar";
import { FaShareSquare } from "react-icons/fa";
import Map from "../Map/Map";
import Footer from "../FooterDiv/Footer";

const ApplyOffer = (props) => {
  const imageDefault = "/logos/default.jpg";
  return (
    <div className="w-[85%] m-auto bg-white ">
      <Navbar />
      <div>
        <div className="flex items-center gap-5 ">
          <aside className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <header tabIndex="0" className="mb-6">
              <div className="flex items-center">
                <div className="mr-4 ">
                  <div className="image-container w-[70px] h-[70px] border border-gray-500 rounded-lg  p-1">
                    {props.image && props.image !== "" ? (
                      <img
                        alt={`Company logo for ${props.company}`}
                        src={props.image}
                        className="w-full h-full object-contain"
                        data-testid="companyVJLogo"
                        title={props.comapny}
                      />
                    ) : (
                      <img
                        alt={`Company logo for ${props.company}`}
                        src={imageDefault}
                        className="w-full h-full object-contain"
                        data-testid="companyVJLogo"
                        title={props.comapny}
                      />
                    )}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold" data-testid="viewJobTitle">
                  {props.title}
                </h2>
              </div>
            </header>
            <div className="mb-6">
              <div>
                <div className="flex items-center mt-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="building"
                    className="w-4 h-4 mr-1 text-gray-600"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2-16-16-16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2-16-16-16H176c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2-16-16-16H80c-8.8 0-16-7.2-16-16V112zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2-16-16-16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2-16-16-16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                    ></path>
                  </svg>
                  <span className="text-gray-600" data-testid="detailText">
                    {props.company}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="map-marker-alt"
                    className="w-4 h-4 mr-1 text-gray-600"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M192 0C86 0 0 86 0 192c0 89.4 55.5 206.2 134.8 320.7 10.2 13.2 30.2 15.9 42.3 5.9L192 397.9l14.9 119.8c2.4 19.1 32.6 19.1 35 0L192 397.9l14.9 119.8c2.4 19.1 32.6 19.1 35 0L192 397.9l64.9 128.6c12.1 10 32.1 7.3 42.3-5.9C328.5 398.2 384 281.4 384 192 384 86 298 0 192 0zm0 288c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"
                    ></path>
                  </svg>
                  <span className="text-gray-600" data-testid="detailLocation">
                    {props.location}
                  </span>
                </div>
              </div>
              <h3
                className="text-lg font-semibold"
                tabIndex="0"
                data-testid="viewJobType"
              >
                {/* {props.time} */}
              </h3>
              <div
                className="mt-2 flex items-center text-gray-600"
                data-testid="viewJobTypeDetail"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="calendar"
                  className="w-4 h-4 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 464a16 16 0 0 1-16-16V192a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16v256a16 16 0 0 1-16 16H16zm0-288a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16zm304 208h-32v-32c0-13.3-10.7-24-24-24s-24 10.7-24 24v32h-32a24.07 24.07 0 0 1-24-24v-40a24.07 24.07 0 0 1 24-24h32v-32c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32a24.07 24.07 0 0 1 24 24v40a24.07 24.07 0 0 1-24 24zm64-208h-96a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16zm0 64h-96a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"
                  ></path>
                </svg>
                <span>{props.time}</span>
              </div>
            </div>
            <div className="mb-6">
              <h3
                className="text-lg font-semibold"
                tabIndex="0"
                data-testid="viewJobDescriptionTitle"
              >
                Job Description
              </h3>
              <p
                className="mt-2 text-gray-700"
                data-testid="viewJobDescriptionText"
              >
                {props.desc}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaShareSquare />
              <button
                className="bg-blueColor h-full p-1 px-5 py-2 rounded-[10px]
              text-white cursor-pointer hover:bg-blue-300"
              >
                <a
                  href={`https://wassitonline.anem.dz/DetailOffer/${props.offerId}`}
                >
                  Apply Now
                </a>
              </button>
            </div>
          </aside>

          <aside className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <div>
              {/* <hr aria-orientation="horizontal" className="my-4" /> */}

              <div data-testid="viewJobBodyContainer">
                <div className="mb-4">
                  <h3
                    className="text-lg font-semibold"
                    data-testid="viewJobDetailsSectionTitle"
                  >
                    Job Details
                  </h3>
                  <div data-testid="viewJobBodyJobDetailsContainer">
                    <div className="flex items-center mb-2">
                      {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="briefcase"
                    className="w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  ></svg> */}
                      <span className="text-gray-700" data-testid="detailText">
                        Contract: {props.contractType}
                      </span>
                    </div>

                    <div className="flex items-center">
                      {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="dollar-sign"
                    className="w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  ></svg> */}
                      <span className="text-gray-700" data-testid="detailText">
                        Dispositif: {props.dispositif}
                      </span>
                    </div>
                  </div>
                </div>

                <hr aria-orientation="horizontal" className="my-4" />

                <div data-testid="viewJobQualificationsContainer">
                  <h3
                    className="text-lg font-semibold"
                    data-testid="viewJobDetailsSectionTitle"
                  >
                    Qualifications
                  </h3>
                  <div className="chakra-wrap css-i6bazn">
                    <ul className="chakra-wrap__list css-wah4g8">
                      <li className="chakra-wrap__listitem css-1yp4ln">
                        <span
                          className="text-gray-700"
                          data-testid="viewJobQualificationItem"
                        >
                          Qualification Level: {props.qualificationLevel}
                        </span>
                      </li>
                      <li className="chakra-wrap__listitem css-1yp4ln">
                        <span
                          className="text-gray-700"
                          data-testid="viewJobQualificationItem"
                        >
                          Experience: {props.experience}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr aria-orientation="horizontal" className="my-4" />
              </div>
            </div>
          </aside>
        </div>
        <div className="my-6">
          <Map latitude={props.structureLat} longitude={props.structureLong} />
        </div>
      </div>
      <div className="my-6">
        <Footer />
      </div>
    </div>
  );
};

export default ApplyOffer;
