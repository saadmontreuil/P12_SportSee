import { Dot } from 'recharts';

/**
  * CustomDot is a functional component that creates a custom dot for the line chart.
  * @property {number} props.cx - The x coordinate of the dot.
  * @property {number} props.cy - The y coordinate of the dot.
  * @returns {JSX.Element} A custom dot for the line chart.
  */
// eslint-disable-next-line react/prop-types
function CustomDot({ cx, cy }) {
  return (
    <g>
      <Dot r={9} fill="white" cy={cy} cx={cx} opacity="0.4" />
      <Dot r={3} fill="white" cy={cy} cx={cx} />
    </g>
  );
}

export default CustomDot;
