import React from 'react';
import {
  LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import styles from './Session.module.css';

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
          <Tooltip />
          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
          />
          <Line type="monotone" dataKey="sessionLength" stroke="white" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
