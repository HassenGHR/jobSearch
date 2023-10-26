import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/FooterDiv/Footer";
import ArticleDiv from "../Components/ArticleDiv/ArticleDiv";
import SearchBlog from "../Components/SearchBlog/SearchBlog";

const SearchBar = () => {
  return (
    <div className="w-[85%] m-auto bg-white ">
      <Navbar />
      <SearchBlog/>
      <ArticleDiv/>
      <Footer />
    </div>
  );
};

export default SearchBar;
