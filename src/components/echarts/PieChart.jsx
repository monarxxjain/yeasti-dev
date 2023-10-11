import React from 'react'
import ReactEcharts from "echarts-for-react";

const PieChart = () => {
  return (
    <ReactEcharts
        option={{
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: 'center',
              right: '0%',
              orient: 'vertical',
              textStyle: {
                color: "#fff"
              },
              marginLeft: "200px"
            },
            series: [
              {
                left:"-25%",
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'left'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold',
                    border: 'none'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ]
              }
            ]
          }}
          style={{ height: "200px", marginLeft: "-2rem", marginTop: "-10px"}}
          className='!w-[100%] !max-w-[25rem]'
    />
  )
}

export default PieChart
