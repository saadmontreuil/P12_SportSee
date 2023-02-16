import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import styles from './BarHorizontal.module.css';

/**
* BarHorizontal is a React component that displays a Horizontal bar with the logo and items.
* @returns {JSX.Element}  A React component that displays the Horizontal bar.
*/

function BarHorizontal() {
  return (
    <nav className={styles.horizontalBar}>
      <Link to="/" className="logoBar">
        <img src={logo} alt="SportSee" className={styles.logo} />
      </Link>

      <ul className={styles.navMenu}>
        <li className="item">
          <Link to="/" className={styles.navLink}>
            Accueil
          </Link>
        </li>
        <li className="item">
          <Link to="/profil" className={styles.navLink}>
            Profil
          </Link>
        </li>
        <li className="item">
          <Link to="/reglage" className={styles.navLink}>
            Réglage
          </Link>
        </li>
        <li className="item">
          <Link to="/communaute" className={styles.navLink}>
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarHorizontal;
