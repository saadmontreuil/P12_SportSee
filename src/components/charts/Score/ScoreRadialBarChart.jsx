import React from 'react';

import {
  RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';
import styles from './Score.module.css';
import ContentLegend from './LegendFormatter';

export default function ScoreRadialBarChart({ data }) {
  const score = data * 100;
  const value = [{ value: score }];
  console.log(value);
  return (
    <div className={styles.chartRadial}>
      <ResponsiveContainer>

        <RadialBarChart
          innerRadius={300}
          outerRadius={75}
          barSize={9}
          data={value}
          startAngle={-270}
          endAngle={90}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={1}
            tick={false}

          />
          <RadialBar
            position="center"
            dataKey="value"
            fill="#ff0000"
            cornerRadius={10}
            angleAxisId={1}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="top"
            align="center"
            payload={value}
            content={<ContentLegend />}
          />
          <text
            x="8%"
            y="10%"
            textAnchor="start"
            dominantBaseline="middle"
            fill="#333"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            Score
          </text>
        </RadialBarChart>
      </ResponsiveContainer>

    </div>
  );
}
