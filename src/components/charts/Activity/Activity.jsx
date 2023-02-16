import React from 'react';

import PropTypes from 'prop-types';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import CustomToolTip from './CustomToolTip';
import legendFormatter from './LegendFormatter';

/**
 * Formats the X-axis tick label.
 * @param {number} i - The tick label value.
 * @returns {number} - The formatted tick label.
 */

const format = (i) => i + 1;

/**
 * Activity is a React component that displays a bar chart of daily activity data.
 * @component activity text
 * @param {Array} props.data - An array of objects that contain the daily activity data.
 * @returns {JSX.Element} - A React component that displays the bar chart.
 */
function Activity({ data }) {
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
            width={(500)}
            align="right"
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
          <text
            x={15}
            y={15}
            dominantBaseline="middle"
            fill="#20253A"
            style={{
              fontWeight: 600,
              fontSize: 20,
              fontFamily: 'roboto',
            }}
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
Activity.defaultProps = {
  data: [],
};
Activity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number,
    kilogram: PropTypes.number,
    day: PropTypes.string,
  })),
};

export default Activity;
