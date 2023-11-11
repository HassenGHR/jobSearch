import React from 'react';
import styles from './SearchBlog.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBlog = () => {
  return (
    <div className={`${styles.searchContainer}`}>
      <section className={`${styles.wrapper}`} id="secondary-menu-container">
        {/* Category Menu */}
        <div className={`${styles.menuContainer}`}>
          <ul id="menu-secondary-category-1" className={`${styles.menuContainer}`}>
            <li className={`${styles.menuItem}`}>
              <a href="#"><strong>CATEGORIES</strong></a>
            </li>
            <li className={`${styles.menuItem}`}>
              <a href="#"><strong>Job search</strong></a>
            </li>
            <li className={`${styles.menuItem}`}>
              <a href="#"><strong>Resume writing</strong></a>
            </li>
            <li className={`${styles.menuItem}`}>
              <a href="#"><strong> Interviewing</strong></a>
            </li>
            <li className={`${styles.menuItem}`}>
              <a href="#"><strong> Negotiating</strong></a>
            </li>
            <li className={`${styles.menuItem}`}>
              <a href="#"><strong> On the job</strong></a>
            </li>    
          </ul>
        </div>
        {/* Search Menu */}
        <ul>
          <li className={`${styles.searchContainer}`} id="search_box">
            <div className={`${styles.inputWrapper}`}>
              <input
                className={`${styles.searchInput}`}
                type="text"
                placeholder="Search the blog"
              />
              <AiOutlineSearch className={`${styles.searchIcon}`} />
            </div>
            <a
              href="#"
              className={`${styles.searchButton}`}
            >
              search
            </a>
            <button aria-label="search-desktop" className={`${styles.iconButton}`}>
              <title>search</title>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SearchBlog;