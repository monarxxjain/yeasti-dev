import React from 'react'
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
    const curve1 = [100.6, 50.9, 9.0, 80.4, 28.7, 70.7, 175.6, 182.2];
    const curve2 = [130.9, 5.9, 110.1, 18.7, 48.3, 69.2, 231.6]
    return (
        <ReactEcharts
            option={{
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {},

                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#333045',
                                type: 'dashed',
                            },
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: "transparent"
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return (
                                        'Precipitation  ' +
                                        params.value +
                                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                    );
                                }
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                    },
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "transparent"
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return (
                                        'Precipitation  ' +
                                        params.value +
                                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                    );
                                }
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: false
                        },
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
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: curve1,
                        symbol: function (value, params) {
                            // Check if it's the last point in the series
                            if (params.dataIndex === curve1.length - 1) {
                                return 'circle'; // Mark the last point with a circle
                            }
                            else {
                                return 'none'; // Do not mark other points
                            }
                        },
                        markPoint: {
                            data: [
                                {
                                    type: 'max',
                                    symbol: 'circle', // Use a predefined circle symbol for the max point
                                    symbolSize: 12, // Adjust the size of the circle
                                    itemStyle: {
                                        color: 'grey', // Set the color for other points
                                        borderColor: '#0021f5', // Set the border color for other points
                                        borderWidth: 3
                                    },
                                    label: {
                                        show: false, // Hide the label for other points
                                    },
                                },
                            ],
                        },
                        lineStyle: {
                            // Define a gradient color for the line
                            color: {
                                type: 'linear', // Use a linear gradient
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1, // You can adjust the gradient direction (0-1)
                                colorStops: [
                                    {
                                        offset: 0, // Starting point color
                                        color: '#0021f5', // Base color
                                    },
                                    {
                                        offset: 1, // Ending point color
                                        color: '#22d83a', // Gradient color
                                    },
                                ],
                            },
                            width: 3, // Adjust the line width as needed
                        },
                    },
                    {
                        type: 'line',
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: curve2,
                        symbol: function (value, params) {
                            // Check if it's the last point in the series
                            if (params.dataIndex === curve2.length - 1) {
                                return 'circle'; // Mark the last point with a circle
                            }
                            else {
                                return 'none'; // Do not mark other points
                            }
                        },
                        markPoint: {
                            data: [
                                {
                                    type: 'max',
                                    symbol: 'circle', // Use a predefined circle symbol for the max point
                                    symbolSize: 12, // Adjust the size of the circle
                                    itemStyle: {
                                        color: 'grey', // Set the color for other points
                                        borderColor: '#0021f5', // Set the border color for other points
                                        borderWidth: 3
                                    },
                                    label: {
                                        show: false, // Hide the label for other points
                                    },
                                },
                            ],
                        },
                        lineStyle: {
                            // Define a gradient color for the line
                            color: {
                                type: 'linear', // Use a linear gradient
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1, // You can adjust the gradient direction (0-1)
                                colorStops: [
                                    {
                                        offset: 0, // Starting point color
                                        color: '#0021f5', // Base color
                                    },
                                    {
                                        offset: 1, // Ending point color
                                        color: '#22d83a', // Gradient color
                                    },
                                ],
                            },
                            width: 3, // Adjust the line width as needed
                        },
                    }
                ]
            }}
            style={{ height: "290px", marginTop: "-58px" }}
            className='w-[100%] lg:!w-[120%] lg:!ms-[-3rem]'
        />
    )
}

export default LineChart
