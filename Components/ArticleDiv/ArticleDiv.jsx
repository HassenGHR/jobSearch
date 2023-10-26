import React, { useState } from "react";
import {MdExpandMore} from 'react-icons/md'

const ArticleDiv = () => {
  const articles = [
    {
      title: "Article Title 1",
      image: "/logos/article1-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 2",
      image: "/logos/article2-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 3",
      image: "/logos/article3-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 4",
      image: "/logos/article4-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 5",
      image: "/logos/article5-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 6",
      image: "/logos/article6-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 7",
      image: "/logos/article7-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
    {
      title: "Article Title 8",
      image: "/logos/article8-photo.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula eu urna consequat fringilla.",
    },
  ];
  const [displayedArticles, setDisplayedArticles] = useState(6);

  const loadMoreArticles = () => {
    setDisplayedArticles(displayedArticles + 6);
  };
  return (
    <div className="container mx-auto mt-10 p-8">
      <div className="grid grid-cols- md:grid-cols-3 gap-4">
        {articles.slice(0, displayedArticles).map((item) => {
          return (
            <section
              key={item.title}
              className="border rounded-lg overflow-hidden shadow-lg p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 overflow-hidden h-20 mb-4">
                {item.text}
              </p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </section>
          );
        })}
      </div>
      {displayedArticles < articles.length && (
        <div className="flex flex-col items-center mt-4 gap-2">
        <button
          className="border-[2px] rounded-[5px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor"
          onClick={loadMoreArticles}
        >
          Load More Articles
        </button>
        <svg
          className="inline-block w-6 h-6 ml-2 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.8 11.13"
        >
          <path
            className="stroke-current"
            d="M1.5,1.5,8.81,9.63,16.3,1.56"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
        </svg>
      </div>
      
      )}
    </div>
  );
};

export default ArticleDiv;
