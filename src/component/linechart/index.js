import React, { Component } from 'react'
import { AreaChart, Area, Tooltip, XAxis } from 'recharts'

export default class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
      dataKey: props.dataKey,
    }
  }

  get themeColor() {
    const { theme = 'positive' } = this.props
    if (theme === 'negative') {
      return '#FF3366'
    } else {
      return '#029D7F'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const data = this.props.data
    const dataKey = this.props.dataKey
    if (data.length !== this.state.data.length) {
      console.log('we updating the linechart now')
      this.setState({ data: data })
      this.setState({ dataKey: dataKey })
    }
  }

  render() {
    return (
      <AreaChart
        width={670}
        height={100}
        data={this.state.data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="8.82%"
              stopColor={this.themeColor}
              stopOpacity={0.15}
            />
            <stop offset="79.41%" stopColor={this.themeColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <XAxis tick={false} hide={true} dataKey="date" />
        <Area
          type="monotone"
          dot={{ strokeWidth: 1, fill: '#FFFFFF' }}
          dataKey={this.state.dataKey}
          stroke={this.themeColor}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    )
  }
}
