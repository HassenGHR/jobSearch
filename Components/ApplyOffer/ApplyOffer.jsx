
// components/ApplyOffer.js
import React from 'react';
import Navbar from '../NavBar/Navbar';
import { FaShareSquare } from 'react-icons/fa';
import Map from '../Map/Map';
import Footer from '../FooterDiv/Footer';
import styles from './ApplyOffer.module.css'; // Import the module.css file

const ApplyOffer = (props) => {
  const imageDefault = '/logos/default.jpg';

  return (
    <div className={styles.container}>
      <Navbar />
      <div>
        <div className={styles.flexContainer}>
          <aside className={styles.aside}>
            <header tabIndex="0" className={styles.mb6}>
              <div className={styles.flexContainer}>
                <div className={styles.mr4}>
                  <div className={styles.imageContainer}>
                    {props.image && props.image !== '' ? (
                      <img
                        alt={`Company logo for ${props.company}`}
                        src={props.image}
                        className={styles.img}
                        data-testid="companyVJLogo"
                        title={props.comapny}
                      />
                    ) : (
                      <img
                        alt={`Company logo for ${props.company}`}
                        src={imageDefault}
                        className={styles.img}
                        data-testid="companyVJLogo"
                        title={props.comapny}
                      />
                    )}
                  </div>
                </div>
                <h2 className={styles.title} data-testid="viewJobTitle">
                  {props.title}
                </h2>
              </div>
            </header>
            <div className={styles.mb6}>
              <div className={styles.detailContainer}>
                <div className={styles.flexItems}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="building"
                    className={styles.textIcon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  ></svg>
                  <span className={styles.textGray600} data-testid="detailText">
                    {props.company}
                  </span>
                </div>
                <div className={styles.flexItems}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="map-marker-alt"
                    className={styles.textIcon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  ></svg>
                  <span
                    className={styles.textGray600}
                    data-testid="detailLocation"
                  >
                    {props.location}
                  </span>
                </div>
              </div>
              <h3
                className={styles.textLgFontSemibold}
                tabIndex="0"
                data-testid="viewJobType"
              ></h3>
              <div
                className={styles.mt2FlexItemsCenterTextGray600}
                data-testid="viewJobTypeDetail"
              >
                <span>{props.time}</span>
              </div>
            </div>
            <div className={styles.mb6}>
              <h3
                className={styles.textLgFontSemibold}
                tabIndex="0"
                data-testid="viewJobDescriptionTitle"
              >
                Job Description
              </h3>
              <p
                className={styles.mt2TextGray700}
                data-testid="viewJobDescriptionText"
              >
                {props.desc}
              </p>
            </div>
            <div className={styles.applyButton}>
              <FaShareSquare />
              <button className={styles.bgBlueColorHP1Px5Py2Rounded10PxTextWhiteCursorPointerHoverBgBlue300}>
                <a
                  href={`${process.env.NEXT_PUBLIC_OFFER_URL}/${props.offerId}`}
                >
                  Apply Now
                </a>
              </button>
            </div>
          </aside>

          <aside className={styles.aside}>
            <div>
              <div data-testid="viewJobBodyContainer">
                <div className={styles.mb4}>
                  <h3
                    className={styles.textLgFontSemibold}
                    data-testid="viewJobDetailsSectionTitle"
                  >
                    Job Details
                  </h3>
                  <div data-testid="viewJobBodyJobDetailsContainer">
                    <div className={styles.flexItemsMb2}>
                      <span
                        className={styles.textGray700}
                        data-testid="detailText"
                      >
                        Contract: {props.contractType}
                      </span>
                    </div>

                    <div className={styles.flexItems}>
                      <span
                        className={styles.textGray700}
                        data-testid="detailText"
                      >
                        Dispositif: {props.dispositif}
                      </span>
                    </div>
                  </div>
                </div>

                <hr aria-orientation="horizontal" className={styles.my4} />

                <div data-testid="viewJobQualificationsContainer">
                  <h3
                    className={styles.textLgFontSemibold}
                    data-testid="viewJobDetailsSectionTitle"
                  >
                    Qualifications
                  </h3>
                  <div className={styles.chakraWrapCssI6bazn}>
                    <ul className={styles.chakraWrapListCssWah4g8}>
                      <li className={styles.chakraWrapListitemCss1yp4ln}>
                        <span
                          className={styles.textGray700}
                          data-testid="viewJobQualificationItem"
                        >
                          Qualification Level: {props.qualificationLevel}
                        </span>
                      </li>
                      <li className={styles.chakraWrapListitemCss1yp4ln}>
                        <span
                          className={styles.textGray700}
                          data-testid="viewJobQualificationItem"
                        >
                          Experience: {props.experience}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr aria-orientation="horizontal" className={styles.my4} />
              </div>
            </div>
          </aside>
        </div>
        <div className={styles.my6}>
          <Map latitude={props.structureLat} longitude={props.structureLong} />
        </div>
      </div>
      <div className={styles.my6}>
        <Footer />
      </div>
    </div>
  );
};

export default ApplyOffer;

