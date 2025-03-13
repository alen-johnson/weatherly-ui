"use client";

import { CurrWeather, Navbar, News } from "@/components/componentsIndex";
import { fetchWeatherData } from "@/utils/api";
import React, { use, useEffect, useState } from "react";
import styles from "./details.module.scss";

export default function page({ params }) {
  const { city } = use(params);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(
    `Searching for ${city} details ...`
  );

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetchWeatherData(city);
      console.log(data);

      if (data) {
        setWeatherData(data);
      } else {
        setError("Failed to fetch weather data");
      }
    };

    fetchdata();

    const t = setTimeout(() => {
      setLoadingMessage(
        `No details found for ${city} or ${city} does not exist`
      );
    }, 5000);
  }, [city]);
  
  return (
    <div className={styles.details}>
      <div>
        <Navbar />
      </div>

      {weatherData?.location ? (
        <div>
          <div className={styles.cityDetails}>
            <h2>Current Weather</h2>
            <CurrWeather cityData={weatherData} />
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
