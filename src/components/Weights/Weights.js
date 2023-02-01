import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

export default function Weights({ data }) {
  const days = data?.map((x) => x.day.split('-')[2]);

  return (

    <ResponsiveContainer width="100%" height="100%">
      <div style={{ width: 500, height: 300 }}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickFormatter={days} dataKey="day" />
          <YAxis dataKey="kilogram" />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
}
