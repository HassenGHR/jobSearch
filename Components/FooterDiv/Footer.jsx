import React from "react";
import styles from "./Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Column 1 */}
      <div className={styles.column}>
        <div className={styles.logoDiv}>
          <h1 className={styles.logo}>
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className={styles.description}>
          We always make our seekers and companies find the best jobs and
          employers find the best candidates
        </p>
      </div>

      {/* Column 2 */}
      <div className={styles.column}>
        <span className={styles.divTitle}>Company</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Features</li>
          <li className={styles.listItem}>News</li>
          <li className={styles.listItem}>FAQ</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className={styles.column}>
        <span className={styles.divTitle}>Resources</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>Account</li>
          <li className={styles.listItem}>Support Center</li>
          <li className={styles.listItem}>Feedback</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className={styles.column}>
        <span className={styles.divTitle}>Support</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Promo</li>
          <li className={styles.listItem}>Req Demo</li>
          <li className={styles.listItem}>Careers</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div className={styles.column}>
        <span className={styles.divTitle}>Contact Info</span>
        <div className={styles.contactInfo}>
          <small className={styles.contactEmail}>testEmail@gmail.com</small>
          <div className={styles.icons}>
            <AiFillInstagram className={styles.icon} />
            <BsFacebook className={styles.icon} />
            <AiOutlineTwitter className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
