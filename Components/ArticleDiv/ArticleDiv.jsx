// ArticleDiv.js

import React, { useState } from "react";
import { MdExpandMore } from 'react-icons/md';
import styles from './ArticleDiv.module.css';

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
    <div className={styles.container}>
      <div className={`${styles.grid} ${styles.container} `}>
        {articles.slice(0, displayedArticles).map((item) => {
          return (
            <section key={item.title} className={styles.article}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.image}
              />
              <h2 className={styles.title}>{item.title}</h2>
              <p className={`${styles.text} overflow-hidden h-20 mb-4`}>
                {item.text}
              </p>
              <a href="#" className={styles.readMore}>
                Read More
              </a>
            </section>
          );
        })}
      </div>
      {displayedArticles < articles.length && (
        <div className={styles.flexContainer}>
          <button
            className={styles.loadMore}
            onClick={loadMoreArticles}
          >
            Load More Articles
          </button>
          <MdExpandMore className={styles.expandIcon} />
        </div>
      )}
    </div>
  );
};

export default ArticleDiv;
