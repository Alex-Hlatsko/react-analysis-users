import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Diagram = ({data}) => {
  return (
    <p>
        <Pie data={data}/>
    </p>
  )
}

export default Diagram