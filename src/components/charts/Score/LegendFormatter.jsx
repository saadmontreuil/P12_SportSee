import PropTypes from 'prop-types';
import styles from './Score.module.css';

/**
*ContentLegend component that displays the percentage of the user's goal.
*@param {Array} payload - An array containing the data of the user's goal. TOTO
*@returns {JSX.Element} - Returns a TOTO component that displays the percentage of the user's goal.
*/

function ContentLegend({ payload }) {
  if (payload && payload.length) {
    return (
      <div className={styles.legend}>
        <h2>{`${payload[0].value}%`}</h2>
        <span>de votre </span>
        <span>objectif</span>
      </div>
    );
  }
  return null;
}

ContentLegend.defaultProps = {
  payload: [],
};

ContentLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
};

export default ContentLegend;
