// Login.jsx

import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divSection}>
        <h2 className={styles.titleText}>Login</h2>
        <form>
          <div className={styles.inputSection}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <div className={styles.passwordDiv}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submit}>
            Login
          </button>
        </form>
        <div className={styles.registerDiv}>
          <p>Don't have an account?</p>
          <Link href="/register" className={styles.registerLink}>
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
