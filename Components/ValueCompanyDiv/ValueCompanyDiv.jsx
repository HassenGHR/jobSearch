// ValueCompany.jsx

import React from "react";
import styles from "./ValueCompany.module.css";

const ValueCompany = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <h1 className={styles.heading}>
            Ready to Showcase Your Company?
          </h1>
          <h2 className={styles.subHeading}>
            Get Started Today!
          </h2>
        </div>
        <button className={styles.button}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ValueCompany;

