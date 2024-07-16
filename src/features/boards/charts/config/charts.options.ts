import type { ChartOptions } from 'chart.js';

export const options: ChartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      border: {
        color: 'rgb(228 228 231)'
      },
      ticks: {
        color: 'rgb(82 82 82)'
      }
    },
    y: {
      grid: {
        display: false
      },
      border: {
        color: 'rgb(228 228 231)'
      },
      ticks: {
        color: 'rgb(82 82 82)',
        precision: 0
      }
    }
  }
};
