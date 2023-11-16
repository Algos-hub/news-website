import React, { useEffect, useState } from "react";
import styles from "@/styles/NewCard.module.css";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { VisibilityOff } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";

export default function NewsCard(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { author, source, title, description, urlToImage, publishedAt, url } =
    props;
  const date = new Date(publishedAt);
  const formattedDate = `${String(date.getDate()).padStart(2, "O")}/${String(
    date.getMonth()
  ).padStart(2, "0")}/${date.getFullYear()}`;

  let styleImg = { height: "200px" };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className={styles.card}>
        <Link className={styles.redirect} href={url}>
          <div className="img" style={styleImg}>
            {" "}
            <img
              className={styles.img}
              width="400vw"
              src={urlToImage}
              alt={title}
            />
          </div>
        </Link>

        <div className={styles.text}>
          <div className="title">
            <Link className={styles.redirect} href={url}>
              <h2 className={styles.headline}>{title}</h2>
            </Link>

            <div className={styles.source}>
              <h4>{source.name}</h4>
              <h4>{formattedDate}</h4>
            </div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.info}>
            <h4 className={styles.author}>By: {author}</h4>
            <div className={styles.icons}>
              <md-icon-button
                style={{ marginInline: "10px", cursor: "pointer" }}
              >
                <md-icon>
                  <span class="material-symbols-outlined">favorite</span>
                </md-icon>
              </md-icon-button>
              <md-icon-button
                style={{ marginInline: "10px", cursor: "pointer" }}
              >
                <md-icon>
                  <span class="material-symbols-outlined">share</span>
                </md-icon>
              </md-icon-button>
              <span>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                    keepMounted: true,
                    disablePortal: true,
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: "fit-content",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Bookmark />
                    </ListItemIcon>
                    <ListItemText>Bookmark</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <VisibilityOff />
                    </ListItemIcon>
                    <ListItemText>Hide</ListItemText>
                  </MenuItem>
                </Menu>

                <md-icon-button
                  style={{ marginInline: "10px", cursor: "pointer" }}
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <md-icon id="usage-anchor">
                    <span class="material-symbols-outlined">more_vert</span>
                  </md-icon>
                </md-icon-button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
