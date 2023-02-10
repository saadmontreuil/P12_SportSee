import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';

export default function CustomCursor({ points }) {
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
