import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    day: '11 Mon',
    temp: -6,
  },
  {
    day: '12 Tue',
    temp: -10,
  },
  {
    day: '13 Wed',
    temp: -8,
  },
  {
    day: '14 Thu',
    temp: -5,
  },
  {
    day: '15 Fri',
    temp: 3,
  },
  {
    day: '16 Sat',
    temp: 6,
  },
  {
    day: '17 Sun',
    temp: 2,
  },
];

const Chart = () => {
  const { min, max } = data.reduce(
    (result, dataPoint) => ({
      min:
        dataPoint.temp < result.min || result.min === 0
          ? dataPoint.temp
          : result.min,
      max:
        dataPoint.temp > result.max || result.max === 0
          ? dataPoint.temp
          : result.max,
    }),
    { min: 0, max: 0 },
  );
  const colorBreakPointPercentage = `${(1 - (0 - min) / (max - min)) * 100}%`;

  const CustomLabel = (props: any) => {
    const { x, y, stroke, value } = props;

    return (
      <text
        x={x}
        y={y - 20}
        dy={-4}
        fill={stroke}
        fontSize={18}
        textAnchor="middle"
        fontFamily="system-ui"
      >
        {value}
        &deg;C
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f56565" />
            <stop offset={colorBreakPointPercentage} stopColor="#F56565" />
            <stop offset={colorBreakPointPercentage} stopColor="#667EEA" />
            <stop offset="100%" stopColor="#667EEA" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          type="category"
          axisLine={false}
          tickLine={false}
          tick={{
            strokeWidth: 2,
          }}
          padding={{ left: 60, right: 60 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          padding={{ top: 30, bottom: 30 }}
        />
        <CartesianGrid strokeDasharray="3 3" fill="#ffffff" strokeWidth={1} />
        <Tooltip />
        <Line
          label={<CustomLabel />}
          type="monotone"
          dataKey="temp"
          stroke="url(#colorUv)"
          strokeWidth={4}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
