import PropTypes from 'prop-types';
import styles from './Session.module.css';

/**
 * CustomTooltip component displays the tooltip with the payload value.
 * @param {Array} payload - Array of objects containing data for the tooltip.
 * @returns {JSX.Element} The JSX component that displays the tooltip.
 */

function CustomTooltip({ payload }) {
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

export default CustomTooltip;
