import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, LinearScale, BarElement);
const Diagram = ({data}) => {
  console.log(data)
  return (
    <>
        {data.datasets[0].type === 'pie' && <Pie data={data}/>}
        {data.datasets[0].type === 'bar' && <Bar data={data}/>}
        {/* <Pie data={data}/> */}
    </>
  )
}

export default Diagram