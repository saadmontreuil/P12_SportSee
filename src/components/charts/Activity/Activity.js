import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import CustomToolTip from './CustomToolTip';
import legendFormatter from './LegendFormatter';

const format = (i) => i + 1;

export default function Activity({ data }) {
  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            tickFormatter={format}
            domain={['dataMin', 'dataMax']}
            tick={{ stroke: '#9B9EAC' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            domain={['dataMin - 1', 'dataMax']}
            tick={{ stroke: '#9B9EAC' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="calories"
            domain={[0, 500]}
            hide
            yAxisId="cl"
          />
          <Tooltip
            content={<CustomToolTip />}
          />
          <Legend
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            height={60}
            align="right"
            width={600}
            formatter={legendFormatter}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            unit="kg"
            barSize={10}
            name="Poids (kg)"
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            unit="kCal"
            yAxisId="cl"
            barSize={10}
            name="Calories brulées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
