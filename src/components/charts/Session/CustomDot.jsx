import { Dot } from 'recharts';

export default function CustomDot({ cx, cy }) {
  return (
    <g>
      <Dot r={9} fill="white" cy={cy} cx={cx} opacity="0.4" />
      <Dot r={3} fill="white" cy={cy} cx={cx} />
    </g>
  );
}
