import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Link to="profil/12" className={styles.btn}>
        Karl
      </Link>
      <Link to="profil/18" className={styles.btn}>
        Cecilia
      </Link>
    </div>
  );
}
