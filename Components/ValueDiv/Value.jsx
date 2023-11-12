import React from "react";
import styles from "./Value.module.css";

const Value = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.valueTitle}>
        The value that holds us true and to account
      </h1>
      <div className={styles.valuesContainer}>
        <div className={styles.singleGrid}>
          <div className={styles.singleTitle}>
            <div className={styles.imgDiv}>
              <img src="/logos/istock.png" alt="" className="w-7/10" />
            </div>
            <span className={styles.valueTitle}>Simplicity</span>
          </div>
          <p className={styles.textContent}>
            Things being made beautifully simple are at the heart of everything we do.
          </p>
        </div>
        <div className={styles.singleGrid}>
          <div className={styles.singleTitle}>
            <div className={styles.imgDiv}>
              <img src="/logos/love.png" alt="" className="w-7/10" />
            </div>
            <span className={styles.valueTitle}>Accessibility</span>
          </div>
          <p className={styles.textContent}>
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>
        <div className={styles.singleGrid}>
          <div className={styles.singleTitle}>
            <div className={styles.imgDiv}>
              <img src="/logos/istock.png" alt="" className="w-7/10" />
            </div>
            <span className={styles.valueTitle}>Transparency</span>
          </div>
          <p className={styles.textContent}>
            We work on the basis of creating trust which can be nurtured through authenticity and transparency.
          </p>
        </div>
      </div>
      <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <h1 className={styles.heading}>
          Ready to switch a career?
          </h1>
          <h2 className={styles.subHeading}>
          Let's get started!
          </h2>
        </div>
        <button className={styles.button}>
          Get Started
        </button>
      </div>
    </div>
    </div>
  );
};

export default Value;
