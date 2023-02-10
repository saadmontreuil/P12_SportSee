import PropTypes from 'prop-types';

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
