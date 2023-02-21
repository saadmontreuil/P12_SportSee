/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import styles from './Nutrition.module.css';

/**
  * Nutrition component to display the data in a Nutrition format
  *
  * @param {Object} data - an object that contains the data to be plotted on the chart
  *
  * @param {Array} nutRients - an array that contains the nutrients to be displayed
  * @param {string} nutRients.name - the name of the nutrient
  * @param {string} nutRients.type - the type of the nutrient
  * @param {string} nutRients.icon - the icon of the nutrient
  * @param {string} nutRients.color - the color of the nutrient
  * @param {number} nutRients.rotate - the rotation of the icon

  * @returns {JSX.Element} A react component that displays the nutrition
  */

function Nutrition({ data, nutRients }) {
  const unit = nutRients.type === 'Calories' ? 'kCal' : 'g';
  return (

    <div className={styles.tag}>
      <div className={`${styles.back}`} style={{ backgroundColor: `${nutRients.color}33` }}>
        <Icon className={styles.icons} icon={nutRients.icon} color={nutRients.color} rotate={nutRients.rotate || 0} />
      </div>
      <div className={styles.tagText}>
        <span>{data?.[nutRients.name]}{unit} </span>
        <span className={styles.type}>{nutRients.type}</span>
      </div>
    </div>

  );
}

Nutrition.defaultProps = {
  data: {},
};

Nutrition.propTypes = {
  data: PropTypes.shape({
    calories: PropTypes.number,
    fat: PropTypes.number,
    carbs: PropTypes.number,
    protein: PropTypes.number,
  }),
  nutRients: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    rotate: PropTypes.number,
  }).isRequired,
};

export default Nutrition;
