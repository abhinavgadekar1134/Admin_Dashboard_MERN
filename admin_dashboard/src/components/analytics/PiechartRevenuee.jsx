import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import "./PiechartRevenuee.css";
import { Pie } from 'react-chartjs-2';
Chart.register(CategoryScale);

const PiechartRevenuee = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 40, 120],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <center><h4 className='chtitle'>Pie chart</h4></center>
      <div >
          <Pie data={data} className="piechart" />
      </div>

    </>
  )
}

export default PiechartRevenuee
