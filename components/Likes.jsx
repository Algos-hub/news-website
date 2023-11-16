import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import styles from "@/styles/Home.module.css";

export default function Likes() {
  const [newsData, setNewsData] = useState([]);

  const articles = newsData.map((data, i) => {
    return <NewsCard key={i} {...data} />;
  });
  let style = { height: "300px" };
  return (
    <>
      <div className={styles.imgContainer} style={style}>
        <img className={styles.img} src="newsBanner.png" alt="" />
      </div>
      <div className={styles.cardsContainer}>{articles}</div>
    </>
  );
}
