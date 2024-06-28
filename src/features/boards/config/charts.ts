import type { ChartData } from 'chart.js';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const dataBoards: ChartData = {
  labels: labels,
  datasets: [
    {
      label: 'Boards',
      data: [2, 1, 1, 2, 4, 0, 1, 5, 0, 0, 2, 0],
      backgroundColor: 'rgb(228 228 231)'
    }
  ]
};

export const dataTasks: ChartData = {
  labels: labels,
  datasets: [
    {
      label: 'Tasks',
      data: [65, 59, 80, 81, 56, 55, 40, 20, 22, 100, 32, 15],
      backgroundColor: 'rgb(228 228 231)'
    }
  ]
};
