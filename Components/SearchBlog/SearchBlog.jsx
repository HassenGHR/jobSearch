import React from 'react'
import "tailwindcss/tailwind.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBlog = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
        <section className="secondary-blog-menu " id="secondary-menu-container">
          <div className="wrapper-secondary-blog-menu flex justify-between items-center gap-2">
            {/* Category Menu */}
            <div className="menu-secondary-category-container  ">
              <ul
                id="menu-secondary-category-1"
                className="category-menu flex items-center gap-4 "
              >
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46350">
                  <a href="#"><strong>CATEGORIES</strong></a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46352">
                  <a href="https://careers.workopolis.com/category/job-search/">
                    Job search
                  </a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46355">
                  <a href="https://careers.workopolis.com/category/resume-writing/">
                    Resume writing
                  </a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46351">
                  <a href="https://careers.workopolis.com/category/interviewing/">
                    Interviewing
                  </a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46353">
                  <a href="https://careers.workopolis.com/category/negotiating/">
                    Negotiating
                  </a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46354">
                  <a href="https://careers.workopolis.com/category/onthejob/">
                    On the job
                  </a>
                </li>
              </ul>
            </div>
            {/* Search Menu */}
            <ul>
              <li
                className="search-off flex items-center gap-2 "
                id="search_box"
              >
                <div className="relative flex items-center">
                  <input
                    className="search-blog p-2 pl-8 border rounded"
                    type="text"
                    placeholder="Search the blog"
                  />
                  <AiOutlineSearch className="absolute left-2 text-gray-500" />
                </div>
                <a
                  href="#"
                  className="search-button p-2 bg-blue-500 text-white rounded ml-2"
                >
                  search
                </a>
                <button aria-label="search-desktop" className="for-ie">
                  <title>search</title>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
  )
}

export default SearchBlog