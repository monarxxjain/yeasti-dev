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
              right: '5%',
              orient: 'vertical',
              textStyle: {
                color: "#fff"
              }
            },
            series: [
              {
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
          style={{width: "100%", height: "200px", marginLeft: "-120px", gap: "100px", marginTop: "-10px"}}
    />
  )
}

export default PieChart
