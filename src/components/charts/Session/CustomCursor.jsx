import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';

/**
  * CustomCursor component to display a cursor on the chart.
  * @param {Array} props.points - The data to be displayed on hover.
  * @returns {JSX} The JSX representation of the component.
  */

function CustomCursor({ points }) {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  );
}

CustomCursor.defaultProps = {
  points: [],
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })),
};

export default CustomCursor;
