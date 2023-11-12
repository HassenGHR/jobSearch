// Contact.jsx

import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.containerSection}>
      <div className={styles.divSection}>
        <h1 className={styles.titleDiv}>Contact Us</h1>
        <p className={styles.text}>
          We would love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to get in touch with us using the
          form below.
        </p>
        <form>
          <div className={styles.formDiv}>
            <label htmlFor="name" className={styles.text}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Your Name"
            />
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="email" className={styles.text}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Your Email"
            />
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="message" className={styles.text}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={styles.input}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
