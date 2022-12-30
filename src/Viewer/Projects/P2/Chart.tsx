import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

const LineChart = (props: { data: number[]; focus: string; range: number }) => {
  const labels = Array(props.range).fill("");
  const options = {
    radius: 0,
    aspectRatio: 1,
    scales: {
      y: {
        display: true,
        ticks: {
          maxTicksLimit: 5,
        },
        grid: {
          display: true,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: props.data,
        fill: false,
        borderColor: "#653c85",
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
