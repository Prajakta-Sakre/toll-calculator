// DistanceGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const DistanceGraph = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Trip ${index + 1}`),
    datasets: [
      {
        label: 'Distance (miles)',
        data: data,
        borderColor: '#2196f3',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default DistanceGraph;
