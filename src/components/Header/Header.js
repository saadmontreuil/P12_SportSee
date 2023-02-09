import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

export default function Header({ user }) {
  return (
    <div className={styles.header}>
      <h1>
        Bonjour
        <strong> {user?.firstName}</strong>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};
