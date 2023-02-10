import PropTypes from 'prop-types';
import styles from './Activity.module.css';

export default function CustomToolTip({ payload, active }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.text}>{`${payload[0].value}kg`}</p>
        <p className={styles.text}>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
}

CustomToolTip.defaultProps = {
  payload: [],
  active: false,
};

CustomToolTip.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
  active: PropTypes.bool,
};
