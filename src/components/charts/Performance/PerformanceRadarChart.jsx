import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';
import styles from './Performance.module.css';

export default function PerformanceRadarChart({ data }) {
  return (
    <div className={styles.chartRadar}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
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
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: 12, angle: 0 }}
          />
          <PolarGrid radialLines={false} />
          <Radar
            dataKey="value"
            data={data}
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceRadarChart.defaultProps = {
  data: [],
};

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.string,
    value: PropTypes.number,
  })),
};
