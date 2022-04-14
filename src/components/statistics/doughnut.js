import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import s from './statistics.module.css';
import statisticsSelectors from 'redux/statistics/statistics-selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const startV = {
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [],
      borderWidth: 1,
    },
  ],
};
const { datasets } = startV;

const Charts = () => {
  const statistics = useSelector(statisticsSelectors.statisticMinus);
  const [data, setData] = useState(startV);
  useEffect(() => {
    // datasets.flatMap(({ backgroundColor, data }) => {
    //   return statistics.forEach(({ color, minus }) => {
    //     backgroundColor.push(color);
    //     data.push(minus);
    //   }, []);
    // });
    const newData = {
      datasets: [
        {
          label: [],
          data: [],
          backgroundColor: [],
          borderWidth: 1,
        },
      ],
    };
    statistics.forEach(({ color, minus, category }) => {
      newData.datasets[0].backgroundColor.push(color);
      newData.datasets[0].data.push(minus);
      newData.datasets[0].label.push(category);
    });
    setData(newData);
  }, [statistics]);

  return (
    <div className={s.containerr}>
      <Doughnut data={data} style={{ width: 320, height: 320 }} />
    </div>
  );
};
export default Charts;
