import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import styles from './Nutrition.module.css';

export default function Nutrition({ data, nutRients }) {
  return (
    <div className={styles.nutrition}>
      {nutRients.map((nutrient) => (
        <div className={styles.tag} key={nutrient.name}>
          <Icon icon={nutrient.icon} color={nutrient.color} rotate={nutrient.rotate || 0} />
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
