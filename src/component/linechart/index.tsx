import React from 'react'
import { AreaChart, Area, Tooltip, XAxis } from 'recharts'

type DataItem = {
  [key:string]: string | number
}

interface ChartProps {
  dataKey: string,
  data: DataItem[],
}

const LineChart: React.FC<ChartProps> = ({ data, dataKey }) => {
  return (
    <AreaChart
      width={680}
      height={100}
      data={data}
      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="8.82%" stopColor={'#029D7F'} stopOpacity={0.15} />
          <stop offset="79.41%" stopColor={'#029D7F'} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip />
      <XAxis tick={false} hide={true} dataKey="date" />
      <Area
        type="monotone"
        dot={{ strokeWidth: 1, fill: '#FFFFFF' }}
        dataKey={dataKey}
        stroke={'#029D7F'}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  )
}

export default LineChart
