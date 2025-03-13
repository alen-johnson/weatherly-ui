"use client";

import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Forecast.module.scss";
import useLocationStore from "@/store/useLocationStore";
import { fetchForecastData } from "@/utils/api";
import { weekdayFromDate } from "@/utils/weekdayFromDate";

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (!city) return;
    const fetchForecast = async () => {
      console.log(city);
      const data = await fetchForecastData(city);
      // console.log(data);
      if (data) {
        setForecastData(data);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className={styles.forecast}>
      {forecastData ? (
        <>
          {forecastData.forecast.forecastday.slice(1).map((d, idx) => (
            <div
              key={idx}
              className={styles.card}
              style={{
                "--temp-color":
                  d.day.avgtemp_c > 30
                    ? "#FF5722"
                    : d.day.avgtemp_c > 25
                    ? "#FF8C42"
                    : d.day.avgtemp_c > 10
                    ? "#4A90E2"
                    : "#1E3A8A",

                "--temp-color-light":
                  d.day.avgtemp_c > 30
                    ? "#FF8A65"
                    : d.day.avgtemp_c > 25
                    ? "#FFA07A"
                    : d.day.avgtemp_c > 10
                    ? "#67B6F4"
                    : "#4169E1",
              }}
            >
              <h3>{weekdayFromDate(d.date)}</h3>
              <p>{d.day.avgtemp_c}°C</p>
              <p>{d.day.condition.text}</p>
              <img src={d.day.condition.icon} />
            </div>
          ))}
        </>
      ) : (
        <div className={styles.forecastLoading}>
          
          <p>Loading forecast details</p>
        </div>
      )}
    </div>
  );
}
