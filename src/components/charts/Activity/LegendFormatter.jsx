import PropTypes from 'prop-types';

/**
 * Renders the formatted legend for the chart.
 * @param {number} value - The value to be displayed in the legend.
 * @returns {React.Element} - The rendered legend element.
 */

function legendFormatter(value) {
  return (
    <span style={{
      color: '#74798C', fontSize: 20, fontWeight: 500, marginRight: 10,
    }}
    >
      {value}
    </span>
  );
}

export default legendFormatter;

legendFormatter.defaultProps = {
  value: '',
};

legendFormatter.propTypes = {
  value: PropTypes.string,
};
