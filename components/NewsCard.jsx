import React, { useEffect, useState } from "react";
import styles from "@/styles/NewCard.module.css";
import Link from "next/link";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { VisibilityOff } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";

export default function NewsCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = { position: "relative", top: "20%" };
  const { author, source, title, description, urlToImage, publishedAt, url } =
    props;
  const date = new Date(publishedAt);
  const formattedDate = `${String(date.getDate()).padStart(2, "O")}/${String(
    date.getMonth()
  ).padStart(2, "0")}/${date.getFullYear()}`;

  useEffect(() => {
    window.addEventListener("scroll", handleClose);

    return () => {
      window.removeEventListener("scroll", handleClose);
    };
  }, []);
  let styleImg = { height: "200px" };
  return (
    // <Link className={styles.redirect} href={url}>
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div className={styles.card} onScroll={() => handleClose()}>
        <div className="img" style={styleImg}>
          {" "}
          <img
            className={styles.img}
            width="400vw"
            src={urlToImage}
            alt={title}
          />
        </div>
        <div className={styles.text}>
          <div className="title">
            <h2 className={styles.headline}>{title}</h2>
            <div className={styles.source}>
              <h4>{source.name}</h4>
              <h4>{formattedDate}</h4>
            </div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.info}>
            <h4 className={styles.author}>By: {author}</h4>
            <div className={styles.icons}>
              <IconButton>
                <Icon className="material-symbols-outlined">favorite</Icon>
              </IconButton>
              <IconButton>
                <Icon className="material-symbols-outlined">share</Icon>
              </IconButton>
              <span>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      position: "relative",
                      marginLeft: "min(-125px, 100%)",
                      marginTop: "min(-62px, 100%)",
                      width: "fit-content",
                    },
                  }}
                >
                  <MenuItem style={style} onClick={handleClose}>
                    <ListItemIcon>
                      <Bookmark />
                    </ListItemIcon>
                    <ListItemText>Bookmark</ListItemText>
                  </MenuItem>
                  <MenuItem style={style} onClick={handleClose}>
                    <ListItemIcon>
                      <VisibilityOff />
                    </ListItemIcon>
                    <ListItemText>Hide</ListItemText>
                  </MenuItem>
                </Menu>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Icon id="usage-anchor" className="material-symbols-outlined">
                    more_vert
                  </Icon>
                </IconButton>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
    // </Link>
  );
}
