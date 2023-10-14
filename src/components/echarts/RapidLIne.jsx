import EChartsReact from 'echarts-for-react';
import React from 'react';

const RapidLine = () => {
    const data = [
        ['2021-01-01', 90],
        ['2021-01-02', 110],
        ['2021-01-03', 80],
        ['2021-01-04', 130],
        ['2021-01-05', 95],
        // Add more data points as needed
      ];
      
  return (
    <EChartsReact
      option={{
        angleAxis: {},
        radiusAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu'],
          z: 10
        },
        polar: {},
        series: [
          {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          }
        ],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      }}
      style={{height: "200px"}}
    />
  );
};

export default RapidLine;
