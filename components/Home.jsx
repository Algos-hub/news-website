import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?pageSize=15&country=us&apiKey=3740b00674284aedbc06608a4736eb03"
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.articles);
      });
  }, []);
  console.log(newsData);
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
