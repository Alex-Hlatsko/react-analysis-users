import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './styles.css'

const Diagram = ({data}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  console.log(data)

  return (
    <Pie data={data}/>
  )
}

export default Diagram