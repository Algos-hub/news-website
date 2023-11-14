import React, { useEffect, useState } from "react";

export default function Home() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?sources=the-verge&apiKey=3740b00674284aedbc06608a4736eb03"
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.articles);
      });
  }, []);
  console.log(newsData);
  return <></>;
}
