"use client";

import {
  CurrWeather,
  Forecast,
  Navbar,
  News,
} from "@/components/componentsIndex";
import React, { use, useEffect, useState } from "react";
import styles from "../../home/home.module.scss";

import {
  AirQualityCard,
  DailyForecastCard,
  UvIndexCard,
} from "@/components/WeatherCards/weatherCardsIndex";
import { useFetchWeather } from "@/hooks/useFetchWeather";
import { useFetchAirQuality } from "@/hooks/useFetchAirQuality";
import { useFetchForecast } from "@/hooks/useFetchForecast";

export default function Page({ params }) {
  const { city } = use(params);
  const [loadingMessage, setLoadingMessage] = useState(
    `Searching for ${city} details ...`
  );

  const {
    data: weatherData,
    loading: weatherDataLoading,
    error: weatherDataError,
  } = useFetchWeather(city);
  const {
    data: airQualityData,
    loading: airQualityDataLoading,
    error: airQualityDataError,
  } = useFetchAirQuality(city);
  const {
    data: forecastData,
    loading: forecastDataLoading,
    error: forecastDataError,
  } = useFetchForecast(city);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoadingMessage(`No details found for ${city} or ${city} does not exist`);
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
            {airQualityData && <AirQualityCard aqData={airQualityData} />}
            {forecastData && <DailyForecastCard forecastData={forecastData.forecast.forecastday[0].hour} />}
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
          <p>{loadingMessage}</p>
        </div>
      )}
    </div>
  );
}
