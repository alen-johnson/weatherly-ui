import React from 'react'
import styles from './DailyForecastCard.module.scss'


export default function DailyForecastCard({forecastData}) {

  return (
    <div className={styles.dailyForecast}>
        <h2>testing</h2>
        <p>{forecastData[0].temp_c}</p>
    </div>
  )
}
