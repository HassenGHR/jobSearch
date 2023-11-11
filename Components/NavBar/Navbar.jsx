import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logoDiv}>
        <h1 className={styles.logo}>
          <strong>Job</strong>Search
        </h1>
      </div>

      <div className={`${styles.menu} ${isOpen ? styles["menu--open"] : ""}`}>
        <ul className={styles.menuList}>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">Jobs</Link>
          </li>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">Companies</Link>
          </li>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">About</Link>
          </li>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">Contact</Link>
          </li>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">Blog</Link>
          </li>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">Login</Link>
          </li>
          <li
            className={`${styles.menuItem} text-[#6f6f6f] hover:text-blueColor`}
          >
            <Link href="/">Register</Link>
          </li>
        </ul>
      </div>

      <div className={`${styles.menuIcon} md:hidden`} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
