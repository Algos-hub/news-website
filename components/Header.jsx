import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import "@material/web/button/text-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/icon/icon.js";
import Box from "@mui/material/Box";
import styles from "../styles/Header.module.css";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Search, Visibility, VisibilityOff } from "@mui/icons-material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: "#6750a4",
    },
  },
});

export default function Header() {
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        backgroundColor: "var(--md-ref-palette-primary95)",
        width: "200px",
      }}
    >
      <List className={styles.list}>
        <Link href="./" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <h1 className={styles.title}>
              <FontAwesomeIcon icon={faNewspaper} /> News
            </h1>
          </ListItem>
        </Link>
        <ListItem key="Profile" disablePadding>
          <ListItemButton>
            <IconButton>
              <Icon className="material-symbols-outlined">account_circle</Icon>
            </IconButton>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <Link
          href="./bookmarks"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem key="Bookmarks" disablePadding>
            <ListItemButton>
              <IconButton>
                <Icon className="material-symbols-outlined">bookmark</Icon>
              </IconButton>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="./likes" style={{ textDecoration: "none", color: "black" }}>
          <ListItem key="Likes" disablePadding>
            <ListItemButton>
              <IconButton>
                <Icon className="material-symbols-outlined">favorite</Icon>
              </IconButton>
              <ListItemText primary="Likes" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider style={{ backgroundColor: "var(--md-ref-palette-primary95)" }} />
      <List className={styles.bottom}>
        <ListItem key="dark" disablePadding>
          <IconButton>
            <Icon className="material-symbols-outlined">dark_mode</Icon>
          </IconButton>
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

  const SearchField = styled(TextField)({
    "& input:valid + fieldset + icon": {
      borderColor: "#6750a4",
      borderWidth: 1,
      borderRadius: "50px",
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
      borderRadius: "50px",
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#6750a4",
      borderLeftWidth: 4,
      padding: "4px !important", // override inline-style
      borderRadius: "50px",
    },
  });

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
      <div className={styles.container}>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        {/* Logo */}
        <div className={styles.logo}>
          <IconButton
            style={{ zIndex: "20" }}
            onClick={toggleDrawer("left", true)}
          >
            <Icon className="material-symbols-outlined">menu</Icon>
          </IconButton>
          <Link href="./" style={{ textDecoration: "none", color: "black" }}>
            <h1 className={styles.title}>
              <FontAwesomeIcon icon={faNewspaper} /> News
            </h1>
          </Link>

          {/* Barre de recherche */}
          <ThemeProvider theme={theme}>
            <SearchField
              color={"secondary"}
              label="Search"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "100px",
                  borderColor: "#6750a4",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <Search edge="end" />
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>
          <Link href="" style={{ textDecoration: "none" }}>
            Popular
          </Link>
        </div>

        {/* Login */}
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
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-username">
                  Username
                </InputLabel>
                <FilledInput
                  id="filled-adornment-username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <md-filled-button onClick={handleLogin}>Login</md-filled-button>
            </div>
          </Modal>

          {/* Sign Up */}
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
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-username">
                  New Username
                </InputLabel>
                <FilledInput
                  id="filled-adornment-username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  New Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <md-filled-button type="button" onClick={handleSignUp}>
                Sign Up
              </md-filled-button>
            </div>
          </Modal>
        </div>
      </div>

      {/* Modal left */}
      <div>
        <React.Fragment key="left">
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
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
