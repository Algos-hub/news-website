import React from "react";
import styles from "@/styles/NewCard.module.css";
import Link from "next/link";
import Icon from "@mui/material/Icon";

export default function NewsCard(props) {
  const { author, source, title, description, urlToImage, publishedAt, url } =
    props;
  const date = new Date(publishedAt);
  const formattedDate = `${String(date.getDate()).padStart(2, "O")}/${String(
    date.getMonth()
  ).padStart(2, "0")}/${date.getFullYear()}`;
  console.log(formattedDate);
  return (
    <Link className={styles.redirect} href={url}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      /> */}

      <div className={styles.card}>
        <div className="img">
          {" "}
          <img
            className={styles.img}
            width="350vw"
            src={urlToImage}
            alt={title}
          />
        </div>
        <div className={styles.text}>
          <div className="title">
            <h2>{title}</h2>
            <div className={styles.source}>
              <h4>{source.name}</h4>
              <h4>{formattedDate}</h4>
            </div>
          </div>
          <div className="description">{description}</div>
          <div className={styles.info}>
            <h3 className={styles.author}>By: {author}</h3>
            <div className="icons">
              <Icon className="material-symbols-outlined">favorite</Icon>
              <Icon className="material-symbols-outlined">share</Icon>
              <Icon className="material-symbols-outlined">more_vert</Icon>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
