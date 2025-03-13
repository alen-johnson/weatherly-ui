"use client";

import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Forecast.module.scss";
import useLocationStore from "@/store/useLocationStore";
import { fetchForecastData } from "@/utils/api";
import { weekdayFromDate } from "@/utils/weekdayFromDate";

export default function Forecast() {
  const { location } = useLocationStore();
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (!location) return;
    const fetchForecast = async () => {
      console.log(location);
      const data = await fetchForecastData(location);
      // console.log(data);
      if (data) {
        setForecastData(data);
      }
    };

    fetchForecast();
  }, [location]);

  return (
    <div className={styles.forecast}>
      {forecastData ? (
        <>
          {forecastData.forecast.forecastday.slice(1).map((d, idx) => (
            <div key={idx} className={styles.card}>
              <Card>
                <CardContent>
                  <h3>{weekdayFromDate(d.date)}</h3>
                  <p>{d.day.avgtemp_c}°C</p>
                  <p>{d.day.condition.text}</p>
                  <img src={d.day.condition.icon} />
                </CardContent>
              </Card>
            </div>
          ))}
        </>
      ) : (
        <>
          {" "}
          <p>Loading forecast details</p>
        </>
      )}
    </div>
  );
}
