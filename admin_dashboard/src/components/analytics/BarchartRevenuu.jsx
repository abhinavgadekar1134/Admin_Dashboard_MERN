import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import './BarchartRevenuu.css'
const BarchartRevenuu = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
    const data = {
        labels: ['Pizza', 'Vada Pav', 'Pav Bhaji','Vada'],
        datasets: [
          {
            label:['Data'],
            data: [10, 20, 15,30],
            backgroundColor: ['red', 'green', 'blue','orange'],
          },
        ],
      };
      
      const options = {
        scales: {
          x: {
            type: 'category', // Specify category scale for x-axis
          },
          y: {
            beginAtZero: true, // Start y-axis from zero
          },
        },
      };
  return (
    <>
        
        <center><h4 className='chtitle'>Bar chart</h4></center>
        <div className="barchart">
          <Bar data={data} options={options} />
        </div>
    </>
  )
}

export default BarchartRevenuu
