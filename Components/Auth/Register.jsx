// Register.jsx

import React from "react";
import Link from "next/link";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divSection}>
        <h2 className={styles.titleText}>Register</h2>
        <form>
          <div className={styles.inputSection}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className={styles.input}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submit}>
            Register
          </button>
        </form>
        <div className={styles.registerDiv}>
          <p>Already have an account?</p>
          <Link href="/login" className={styles.registerLink}>
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
