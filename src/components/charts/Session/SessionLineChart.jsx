import React from 'react';
import {
  LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import styles from './Session.module.css';
import CustomTooltip from './CustomToolTip';
import CustomCursor from './CustomCursor';
import CustomDot from './CustomDot';

export default function SessionLineChart({ data }) {
  return (
    <div className={styles.chartLine}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={254}
          height={254}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#FFFFFF" />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ background: '#FFFFFF', outline: 'none' }}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            activeDot={<CustomDot />}
          />
          <text
            x="8%"
            y="10%"
            textAnchor="start"
            dominantBaseline="middle"
            fill="#FFFFFF"
            style={{ fontSize: 14, fontWeight: 500, opacity: 0.7 }}
          >
            Durée moyenne des
            <tspan x="8%" y="18%">sessions</tspan>
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
