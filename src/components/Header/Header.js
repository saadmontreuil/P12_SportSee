import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

/**
 * Renders the formatted legend for the chart.
 * @param {number} user - The value to be displayed in the legend.
 * @returns {React.Element} - The rendered legend element.
 */

function Header({ user }) {
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

export default Header;

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};
