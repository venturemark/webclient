import React from 'react';
import { AreaChart, Area, Tooltip, XAxis } from 'recharts';
import { IMetric } from 'module/interface/metric';

interface ChartProps {
  dataKey: string;
  data: IMetric[];
  handleChangeContext: (
    e: React.MouseEvent<HTMLInputElement>,
    payload: any,
  ) => void;
}

export const Component: React.FC<ChartProps> = ({
  data,
  dataKey,
  handleChangeContext,
}) => {
  return (
    <AreaChart
      width={560}
      height={150}
      data={data}
      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="8.82%"
            stopColor={'#029D7F'}
            stopOpacity={0.15}
          />
          <stop
            offset="79.41%"
            stopColor={'#029D7F'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <Tooltip />
      <XAxis tick={false} hide={true} dataKey="date" />
      <Area
        type="monotone"
        dot={{ strokeWidth: 1, fill: '#FFFFFF' }}
        activeDot={{
          style: { cursor: 'pointer' },
          onClick: (
            e: React.MouseEvent<HTMLInputElement>,
            payload: any,
          ) => handleChangeContext(e, payload),
        }}
        dataKey={dataKey}
        stroke={'#029D7F'}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};
