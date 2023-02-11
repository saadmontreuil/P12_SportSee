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

export default function Nutrition({ data, nutRients }) {
  return (

    <div className={styles.nutrition}>
      {nutRients.map((nutrient) => (
        <div className={styles.tag} key={nutrient.name}>
          <div className={`${styles.back}`} style={{ backgroundColor: `${nutrient.color}33` }}>
            <Icon className={styles.icons} icon={nutrient.icon} color={nutrient.color} rotate={nutrient.rotate || 0} />
          </div>
          <div className={styles.tagText}>
            <span>{data?.[nutrient.name]}g </span>
            <span className={styles.type}>{nutrient.type}</span>
          </div>
        </div>
      ))}
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
  nutRients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    rotate: PropTypes.number,
  })).isRequired,
};
