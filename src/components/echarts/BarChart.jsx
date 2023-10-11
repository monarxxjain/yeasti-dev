import EChartsReact from 'echarts-for-react'
import React from 'react'

const BarChart = () => {
  return (
    <EChartsReact
        option={{
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: "transparent"
                    }
                },
              }
            ],
            yAxis: [
              {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: '#333045',
                        type: 'dashed',
                    },
                },
              }
            ],
            series: [
              {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
              }
            ]
          }}
          style={{ marginTop: "-40px", width: "80%", height: "230px"}}
    />
  )
}

export default BarChart
