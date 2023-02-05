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
