import React from 'react'

import'@material/web/button/text-button.js';
import'@material/web/button/filled-button.js';
import'@material/web/textfield/outlined-text-field.js';
import'@material/web/icon/icon.js';

import styles from '../styles/Header.module.css';

import IconButton from "@mui/material/IconButton";
import Icon from '@mui/material/Icon';
import Modal from '@mui/material/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginOverlayOpen, setLoginOverlayOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

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
    console.log('Username:', email);
    console.log('Password:', password);

    setLoginOverlayOpen(false);
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

  const generateModalButtons = (buttons) => (
    buttons.map(({ icon, onClick }, index) => (
      <HeaderButton key={index} icon={icon} onClick={onClick} />
    ))
  );

  const modalButtons = [
    { icon: 'close', onClick: handleCloseModal },
    { icon: 'account_circle', onClick: () => console.log('Account Circle Clicked') },
    { icon: 'favorite', onClick: () => console.log('Favorite Clicked') },
    { icon: 'bookmark', onClick: () => console.log('Bookmark Clicked') },
  ];
 
  return (
    <>
      <div className={styles.container}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        {/* Logo */}
        <div className={styles.logo}>
          <HeaderButton icon="menu" onClick={handleOpenModal} />
          <h1 className={styles.title}><FontAwesomeIcon icon={faNewspaper} /> News</h1>

        {/* Barre de recherche */}
          <div className={styles.search}>
            <md-outlined-text-field label="Search">
              <md-icon slot="leading-icon">search</md-icon>
            </md-outlined-text-field>
          </div>
        </div>

        {/* Login */}
        <div className={styles.login}>
          <md-text-button onClick={handleOpenLoginOverlay}>Login</md-text-button>
          <Modal open={isLoginOverlayOpen} onClose={handleCloseLoginOverlay} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className={styles.loginOverlay}>
              <form>
                <label>
                  Email:
                </label>
                <input type="email" value={email} placeholder='youremail@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                <label>
                  Password:
                </label> 
                <input type="password" value={password} placeholder='********' onChange={(e) => setPassword(e.target.value)} />         
                  <md-text-button onClick={handleLogin}>Login</md-text-button>
              </form>
            </div>
          </Modal>

          {/* Sign Up */}
          <md-filled-button onClick={handleOpenSignUpModal}>Sign Up</md-filled-button>
          <Modal open={isSignUpModalOpen} onClose={handleCloseSignUpModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className={styles.loginOverlay}>
             <form>
                <label>
                  New Email:
                </label>
                <input type="text" value={signUpEmail} placeholder='youremail@gmail.com' onChange={(e) => setSignUpEmail(e.target.value)} />
                <label>
                  New Password:
                </label>
                <input type="password" value={signUpPassword} placeholder='********' onChange={(e) => setSignUpPassword(e.target.value)} />
                <md-filled-button  type="button" onClick={handleSignUp}>
                  Sign Up
                </md-filled-button>
             </form>
            </div>
          </Modal>
        </div>
      </div>

      {/* Modal left */}
      <Modal open={isModalOpen} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <div className={styles.leftModalContent}>
          <div className={styles.modalContent}>
            {generateModalButtons(modalButtons)}
          </div>
          <div className={styles.mode}>
            <IconButton>
              <Icon className="material-symbols-outlined">dark_mode</Icon>
            </IconButton>
          </div>
        </div>
      </Modal>
    </>
  )
}

