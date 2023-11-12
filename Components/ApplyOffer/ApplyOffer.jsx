// ApplyOffer.js

import React from "react";
import { FaShareSquare } from "react-icons/fa";
import Map from "../Map/Map";
import Layout from "../Layout/Layout";

import styles from "./ApplyOffer.module.css";

const ApplyOffer = (props) => {
  const imageDefault = "/logos/default.jpg";
  return (
    <Layout>
      <div className={styles.container}>
        <aside className={styles.offerAside}>
          <header tabIndex="0" className={styles.header}>
            <div className={`${styles.divSection} flex items-center`}>
              <div className={styles.firstcard}>
                <div className={styles.imageContainer}>
                  {props.image && props.image !== "" ? (
                    <img
                      alt={`Company logo for ${props.company}`}
                      src={props.image}
                      className={styles.imgDefault}
                      data-testid="companyVJLogo"
                      title={props.comapny}
                    />
                  ) : (
                    <img
                      alt={`Company logo for ${props.company}`}
                      src={imageDefault}
                      className={styles.imgDiv}
                      data-testid="companyVJLogo"
                      title={props.comapny}
                    />
                  )}
                </div>
              </div>
              <h2 className={styles.textTitle} data-testid="viewJobTitle">
                {props.title}
              </h2>
            </div>
          </header>
          <div className={styles.applyDiv}>
            <div>
              <div className={styles.defaultIcon}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="building"
                  className="buildingIcon w-4 h-4 mr-1 text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  {/* Add SVG path here */}
                </svg>
                <span className={styles.companyTitle} data-testid="detailText">
                  {props.company}
                </span>
              </div>
              <div className={styles.locationIcon}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-marker-alt"
                  className="markerIcon w-4 h-4 mr-1 text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  {/* Add SVG path here */}
                </svg>
                <span
                  className={styles.locationText}
                  data-testid="detailLocation"
                >
                  {props.location}
                </span>
              </div>
            </div>
            <h3
              className={styles.dateText}
              tabIndex="0"
              data-testid="viewJobType"
            >
              {/* {props.time} */}
            </h3>
            <div
              className={styles.calendarIcon}
              data-testid="viewJobTypeDetail"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="calendar"
                className="calendarSvg w-4 h-4 mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* Add SVG path here */}
              </svg>
              <span>{props.time}</span>
            </div>
          </div>
          <div className={styles.applyDiv}>
            <h3
              className={styles.descriptionTitle}
              tabIndex="0"
              data-testid="viewJobDescriptionTitle"
            >
              Job Description
            </h3>
            <p
              className={styles.descriptionText}
              data-testid="viewJobDescriptionText"
            >
              {props.desc}
            </p>
          </div>
          <div className={styles.linkDiv}>
            <FaShareSquare />
            <button className={styles.applyButton}>
              <a
                href={`${process.env.NEXT_PUBLIC_OFFER_DETAIL_URL}${props.offerId}`}
              >
                Apply Now
              </a>
            </button>
          </div>
        </aside>

        <aside className={styles.detailsAside}>
          <div>
            <div data-testid="viewJobBodyContainer">
              <div className={styles.detailsDiv}>
                <h3
                  className={styles.detailsTitle}
                  data-testid="viewJobDetailsSectionTitle"
                >
                  Job Details
                </h3>
                <div data-testid="viewJobBodyJobDetailsContainer">
                  <div className={styles.detailsContainer}>
                    <span
                      className={styles.detailsText}
                      data-testid="detailText"
                    >
                      Contract: {props.contractType}
                    </span>
                  </div>
                  <div className={styles.detailsDispositive}>
                    <span
                      className={styles.detailsText}
                      data-testid="detailText"
                    >
                      Dispositif: {props.dispositif}
                    </span>
                  </div>
                </div>
              </div>

              <hr aria-orientation="horizontal" className={styles.lineHr} />

              <div data-testid="viewJobQualificationsContainer">
                <h3
                  className={styles.detailsTitle}
                  data-testid="viewJobDetailsSectionTitle"
                >
                  Qualifications
                </h3>
                <div className="chakra-wrap css-i6bazn">
                  <ul className="chakra-wrap__list css-wah4g8">
                    <li className="chakra-wrap__listitem css-1yp4ln">
                      <span
                        className={styles.detailsText}
                        data-testid="viewJobQualificationItem"
                      >
                        Qualification Level: {props.qualificationLevel}
                      </span>
                    </li>
                    <li className="chakra-wrap__listitem css-1yp4ln">
                      <span
                        className={styles.detailsText}
                        data-testid="viewJobQualificationItem"
                      >
                        Experience: {props.experience}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr aria-orientation="horizontal" className={styles.lineHr} />
            </div>
          </div>
        </aside>
      </div>
      <div className={styles.mapDiv}>
        <Map latitude={props.structureLat} longitude={props.structureLong} />
      </div>
    </Layout>
  );
};

export default ApplyOffer;
