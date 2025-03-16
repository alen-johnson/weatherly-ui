import React, { useState } from 'react'
import styles from './DailyForecastCard.module.scss'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,  
  LinearScale,   
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";
import { extractIcons, extractPrecipitatiton, extractTemperatures, extractWind } from '@/utils/helpers/extractWeather';
import { RadioNav } from '@/components/componentsIndex';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function DailyForecastCard({ forecastData }) {
  console.log(forecastData);

  const icons = extractIcons(forecastData); // use icons to display on graphs later  
  const [content, setContent] = useState("Temperature");
  const labels = ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"];

  const graphData = {
    Temperature: {
      label: "Temperature (°C)",
      data: extractTemperatures(forecastData),
      borderColor:"rgba(195, 292, 192, 1)"
    },
    Wind: {
      label: "Wind (kmph)",
      data: extractWind(forecastData), 
      borderColor:"rgba(95, 192, 392, 1)"
    },
    Precipitation: {
      label: "Precipitation (mm)",
      data: extractPrecipitatiton(forecastData), 
      borderColor: "rgba(235, 92, 192, 1)"
    },
  };


  const chartData = {
    labels,
    datasets: [
      {
        label: graphData[content].label,
        data: graphData[content].data,
        borderColor: graphData[content].borderColor, 
        backgroundColor: "rgba(75, 292, 192, 0.2)", 
        tension: 0.4, 
        pointRadius: 4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true }, 
      tooltip: { enabled: true }, 
    },
    scales: {
      x: { grid: { display: false } }, 
      y: { grid: { display: false }, beginAtZero: false },
    },
  };
  const getBackground = () => {
    if (content === "Temperature") {
      return "linear-gradient(to top, rgba(214, 118, 80, 0.8), rgba(255, 201, 4, 0.8))";
    } else if (content === "Precipitation") {
      return "linear-gradient(to top, rgba(80, 118, 214, 0.8), rgba(2, 201, 255, 0.8))"; 
    } else if (content === "Wind") {
      return "linear-gradient(to top, rgba(100, 100, 100, 0.8), rgba(180, 180, 180, 0.8))";
    }
  };

  return (
    <div className={styles.dailyForecast} style={{background:getBackground()}}>
      <div className={styles.title}>
      <h2>{content}</h2>
      <RadioNav onSelect={setContent} />
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
}
