import EChartsReact from 'echarts-for-react'
import React from 'react'

const PictorialBarChart = () => {
    let category = [];
let dottedBase = +new Date();
let lineData = [];
let barData = [];
for (let i = 0; i < 10; i++) {
  let date = new Date((dottedBase += 3600 * 24 * 1000));
  category.push(
    [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
  );
  let b = Math.random() * 200;
  let d = Math.random() * 200;
  barData.push(b);
  lineData.push(d + b);
}
  return (
    <EChartsReact
        option={{
            backgroundColor: 'transparent',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['line', 'bar'],
              textStyle: {
                color: '#ccc'
              }
            },
            xAxis: {
              data: category,
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            yAxis: {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            series: [
              {
                name: 'line',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
              },
              {
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                  borderRadius: 5,
                //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //     { offset: 0, color: '#14c8d4' },
                //     { offset: 1, color: '#43eec6' }
                //   ])
                },
                data: barData
              },
              {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //     { offset: 0, color: 'rgba(20,200,212,0.5)' },
                //     { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                //     { offset: 1, color: 'rgba(20,200,212,0)' }
                //   ])
                },
                z: -12,
                data: lineData
              },
              {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                  color: 'transparent'
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
              }
            ]
          }}
          style={{height: "220px"}}
    />
  )
}

export default PictorialBarChart
