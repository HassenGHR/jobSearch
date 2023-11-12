// About.jsx

import React from "react";
import styles from "./About.module.css";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className={styles.mainSection}>
        <div className={styles.textSection}>
          <h1 className={styles.textSection}>About Us</h1>
          <p className={styles.text}>
            At JobSearch, we are dedicated to helping job seekers find their
            dream jobs and employers connect with talented individuals. Our
            platform simplifies the job search process and empowers companies to
            discover the best candidates.
          </p>
          <p className={styles.text}>
            With a user-friendly interface and powerful search features, we make
            it easy for you to navigate through countless job listings and find
            the perfect opportunity. Whether you're a recent graduate looking
            for your first job or an experienced professional seeking a new
            challenge, we've got you covered.
          </p>
          <p className={styles.text}>
            Our mission is to bridge the gap between job seekers and employers,
            providing a seamless experience for both parties. Join us today and
            embark on a journey to shape your career or find your ideal
            candidate.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/logos/jobs-og-image.png/"
            alt="About Us"
            className={styles.imgDiv}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
