import EChartsReact from 'echarts-for-react'
import React from 'react'

const CandleStickChart = () => {
  return (
    <EChartsReact 
        option={{
            xAxis: {
              data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
            },
            yAxis: {},
            series: [
              {
                type: 'candlestick',
                data: [
                  [20, 34, 10, 38],
                  [40, 35, 30, 50],
                  [31, 38, 33, 44],
                  [38, 15, 5, 42]
                ]
              }
            ]
          }}
          style={{height:"270px", marginTop: "-50px"}}
    />
  )
}

export default CandleStickChart
