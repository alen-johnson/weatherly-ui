"use client";

import {
  CurrWeather,
  Forecast,
  Navbar,
  News,
} from "@/components/componentsIndex";
import React, { use, useEffect, useState } from "react";
import styles from "../../home/home.module.scss";
import { Button } from "@mui/material";
import { AirQualityCard, UvIndexCard } from "@/components/WeatherCards/weatherCardsIndex";
import { fetchAirQualityData, fetchWeatherData } from "@/utils/api/weather";

export default function page({ params }) {
  const { city } = use(params);
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(
    `Searching for ${city} details ...`
  );

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const [weather, airQuality] = await Promise.all([
          fetchWeatherData(city),
          fetchAirQualityData(city),
        ]);

        if (weather) {
          setWeatherData(weather);
        } else {
          setError("Error Fetching weather data");
        }

        if (airQuality) {
          setAirQualityData(airQuality);
        } else {
          setError("Error Fetchinf air quality data");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchdata();

    const t = setTimeout(() => {
      setLoadingMessage(
        `No details found for ${city} or ${city} does not exist`
      );
    }, 3000);
  }, [city]);

  return (
    <div className={styles.home}>
      <Navbar />

      {weatherData?.location ? (
        <div className={styles.weatherContainer}>
          <div className={styles.allDetails}>
            <CurrWeather cityData={weatherData} />
            <UvIndexCard uvIndex={weatherData.current.uv} />
            <AirQualityCard aqData={airQualityData}/>
          </div>

          <div className={styles.forecast}>
            <h2>Forecast</h2>
            <Forecast city={city} />
          </div>

          <div>
            <News city={city} region={weatherData.location.region} />
          </div>
        </div>
      ) : (
        <div>
          <p> {loadingMessage}</p>
        </div>
      )}
    </div>
  );
}
