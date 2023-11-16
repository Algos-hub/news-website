import React, { useEffect, useState } from "react";

import "@material/web/button/text-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/icon/icon.js";
import Box from "@mui/material/Box";
import styles from "../styles/Header.module.css";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

export default function Header({ darkMode, setDarkMode }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(document.querySelector(":root").className);
  });

  function darkTheme() {
    document.querySelector(":root").classList.toggle("dark");
  }

  const list = (anchor) => (
    // Drawer Content

    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: 1,
        backgroundColor: "var(--md-sys-color-surface)",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Drawer Logo */}

      <List className={styles.list}>
        <Link href="./" style={{ textDecoration: "none", color: "black" }}>
          <ListItem className={styles.accNav}>
            <h1 className={styles.title}>
              <FontAwesomeIcon icon={faNewspaper} /> News
            </h1>
          </ListItem>
        </Link>

        {/* Drawer Account Button */}

        <ListItem key="Profile" className={styles.accNav}>
          <md-icon>
            <span class="material-symbols-rounded">account_circle</span>
          </md-icon>
          <md-text-button
            style={{ color: "var(--md-sys-color-on-primary-container)" }}
          >
            Account
          </md-text-button>
        </ListItem>

        {/* Drawer Log In */}

        <ListItem>
          <div className={styles.loginDrawer}>
            <md-outlined-button
              onClick={handleOpenLoginOverlay}
              style={{ marginInline: "10px" }}
            >
              Login
            </md-outlined-button>
            <Modal
              open={isLoginOverlayOpen}
              onClose={handleCloseLoginOverlay}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={styles.loginOverlay}>
                <h2 className={styles.log}>Log in</h2>
                <form
                  action=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <md-filled-text-field
                    label="Username"
                    style={{ marginBottom: "20px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></md-filled-text-field>
                  <md-filled-text-field
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    <md-icon-button toggle slot="trailing-icon">
                      <md-icon>
                        <span
                          class="material-symbols-rounded"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </md-icon>
                    </md-icon-button>
                  </md-filled-text-field>
                </form>
                <md-filled-button onClick={handleLogin}>Login</md-filled-button>
              </div>
            </Modal>

            {/* Drawer Sign Up */}

            <md-filled-button onClick={handleOpenSignUpModal}>
              Sign Up
            </md-filled-button>
            <Modal
              open={isSignUpModalOpen}
              onClose={handleCloseSignUpModal}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={styles.loginOverlay}>
                <h2 className={styles.log}>Sign Up</h2>
                <form
                  action=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <md-filled-text-field
                    label="New Username"
                    style={{ marginBottom: "20px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></md-filled-text-field>
                  <md-filled-text-field
                    label="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    <md-icon-button toggle slot="trailing-icon">
                      <md-icon>
                        <span
                          class="material-symbols-rounded"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </md-icon>
                    </md-icon-button>
                  </md-filled-text-field>
                </form>
                <md-filled-button type="button" onClick={handleSignUp}>
                  Sign Up
                </md-filled-button>
              </div>
            </Modal>
          </div>
        </ListItem>

        <Divider
          style={{ backgroundColor: "var(--md-ref-palette-primary95)" }}
        />

        {/* Drawer Trending Button */}

        <ListItem key="Trending" className={styles.trending}>
          <md-icon>
            <span class="material-symbols-rounded">trending_up</span>
          </md-icon>
          <md-text-button
            style={{ color: "var(--md-sys-color-on-primary-container)" }}
          >
            Trending
          </md-text-button>
        </ListItem>

        {/* Drawer Bookmarks Button */}

        <Link
          href="./bookmarks"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem key="Bookmarks">
            <md-icon>
              <span class="material-symbols-rounded">bookmark</span>
            </md-icon>
            <md-text-button>Bookmarks</md-text-button>
          </ListItem>
        </Link>
        <Link href="./likes" style={{ textDecoration: "none", color: "black" }}>
          {/* Drawer Favorites Button */}

          <ListItem key="Likes">
            <md-icon>
              <span class="material-symbols-rounded">favorite</span>
            </md-icon>
            <md-text-button>Favorites</md-text-button>
          </ListItem>
        </Link>
      </List>
      <Divider style={{ backgroundColor: "var(--md-ref-palette-primary95)" }} />
      <List className={styles.bottom}>
        {/* Drawer Theme Button */}

        <ListItem key="dark" disablePadding>
          <md-icon-button
            onClick={toggleTheme}
            // onClick={() => {
            //   darkTheme();
            // }}
          >
            <md-icon>
              <span class="material-symbols-rounded">
                {theme === "dark" ? "dark_mode" : "light_mode"}
              </span>
            </md-icon>
          </md-icon-button>
        </ListItem>
      </List>
    </Box>
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginOverlayOpen, setLoginOverlayOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  // Modal left
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Overlay Login
  const handleOpenLoginOverlay = () => {
    setLoginOverlayOpen(true);
  };

  const handleCloseLoginOverlay = () => {
    setLoginOverlayOpen(false);
  };

  const handleLogin = () => {
    // Logique de connexion
    console.log("Username:", email);
    console.log("Password:", password);

    setLoginOverlayOpen(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //  Overlay Sign up
  const handleOpenSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const handleCloseSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const handleSignUp = () => {
    // Logique de création de compte
  };

  // function Button
  const HeaderButton = ({ icon, onClick }) => (
    <IconButton onClick={onClick}>
      <Icon className="material-symbols-outlined">{icon}</Icon>
    </IconButton>
  );

  const generateModalButtons = (buttons) =>
    buttons.map(({ icon, onClick }, index) => (
      <HeaderButton key={index} icon={icon} onClick={onClick} />
    ));

  const modalButtons = [
    { icon: "close", onClick: handleCloseModal },
    {
      icon: "account_circle",
      onClick: () => console.log("Account Circle Clicked"),
    },
    { icon: "favorite", onClick: () => console.log("Favorite Clicked") },
    { icon: "bookmark", onClick: () => console.log("Bookmark Clicked") },
  ];

  return (
    <>
      <div className={styles.container} onScroll={toggleDrawer("left", false)}>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        {/* Nav Bar Content Left */}
        <div
          className={styles.nav}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {/* Logo */}
          <div className={styles.logo}>
            <md-icon-button
              onClick={toggleDrawer("left", true)}
              style={{ cursor: "pointer", padding: "10px" }}
            >
              <md-icon
                style={{ color: "var(--md-sys-color-on-primary-container)" }}
              >
                <span class="material-symbols-rounded">menu</span>
              </md-icon>
            </md-icon-button>
            <Link href="./" style={{ textDecoration: "none", color: "black" }}>
              <h1 className={styles.title}>
                <FontAwesomeIcon icon={faNewspaper} /> News
              </h1>
            </Link>
          </div>
          {/* Barre de recherche */}
          <div className={styles.search}>
            <md-outlined-text-field label="Search" type="text">
              <md-icon-button toggle slot="trailing-icon">
                <md-icon id="search">
                  <span class="material-symbols-rounded">search</span>
                </md-icon>
              </md-icon-button>
            </md-outlined-text-field>
          </div>
          {/* Trending Nav Button */}
          <div className={styles.trendingNav}>
            <md-text-button>Trending</md-text-button>
          </div>
        </div>

        {/* Nav Login */}
        <div className={styles.login}>
          <md-outlined-button
            onClick={handleOpenLoginOverlay}
            style={{ marginInline: "10px" }}
          >
            Login
          </md-outlined-button>
          <Modal
            open={isLoginOverlayOpen}
            onClose={handleCloseLoginOverlay}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.loginOverlay}>
              <h2 className={styles.log}>Log in</h2>
              <form
                action=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                <md-filled-text-field
                  label="Username"
                  style={{ marginBottom: "20px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></md-filled-text-field>
                <md-filled-text-field
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <md-icon-button toggle slot="trailing-icon">
                    <md-icon>
                      <span
                        class="material-symbols-rounded"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </md-icon>
                  </md-icon-button>
                </md-filled-text-field>
              </form>
              <md-filled-button onClick={handleLogin}>Login</md-filled-button>
            </div>
          </Modal>

          {/* Nav Sign Up */}
          <md-filled-button onClick={handleOpenSignUpModal}>
            Sign Up
          </md-filled-button>
          <Modal
            open={isSignUpModalOpen}
            onClose={handleCloseSignUpModal}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.loginOverlay}>
              <h2 className={styles.log}>Sign Up</h2>
              <form
                action=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                <md-filled-text-field
                  label="New Username"
                  style={{ marginBottom: "20px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></md-filled-text-field>
                <md-filled-text-field
                  label="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <md-icon-button toggle slot="trailing-icon">
                    <md-icon>
                      <span
                        class="material-symbols-rounded"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </md-icon>
                  </md-icon-button>
                </md-filled-text-field>
              </form>
              <md-filled-button type="button" onClick={handleSignUp}>
                Sign Up
              </md-filled-button>
            </div>
          </Modal>
        </div>
      </div>

      {/* Modal Left */}
      <div>
        <React.Fragment key="left">
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onScroll={toggleDrawer("left", false)}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </>
  );
}
