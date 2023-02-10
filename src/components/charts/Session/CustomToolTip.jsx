import PropTypes from 'prop-types';
import styles from './Session.module.css';

export default function CustomTooltip({ payload }) {
  return (
    <div className={styles.CustomTooltip}>
      <p>{`${payload[0]?.value} `}min</p>
    </div>
  );
}

CustomTooltip.defaultProps = {
  payload: [],
};

CustomTooltip.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
};
