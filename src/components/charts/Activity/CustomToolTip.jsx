import PropTypes from 'prop-types';
import styles from './Activity.module.css';

/**

* CustomToolTip component to display data when hovering on a chart.
* @param {Array} props.payload - The data to be displayed on hover.
* @param {Boolean} props.active - A boolean to indicate if the data is active.
* @returns {JSX} The JSX representation of the component.
*/

function CustomToolTip({ payload, active }) {
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

export default CustomToolTip;
