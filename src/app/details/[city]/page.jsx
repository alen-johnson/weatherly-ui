"use client";

import {
  CurrWeather,
  Forecast,
  Navbar,
  News,
} from "@/components/componentsIndex";
import React, { useEffect, useState } from "react";
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
  const { city } = params;
  const [loadingMessage, setLoadingMessage] = useState(`Searching for ${city} details ...`);
  const [timeoutReached, setTimeoutReached] = useState(false);

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

  const isLoading =
    weatherDataLoading || airQualityDataLoading || forecastDataLoading;

  const isError =
    !isLoading &&
    (!weatherData?.location || weatherDataError || forecastDataError);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutReached(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [city]);

  return (
    <div className={styles.home}>
      <Navbar />

      {isLoading && !timeoutReached ? (
        <div className={styles.loadingContainer}>
          <p>{loadingMessage}</p>
        </div>
      ) : isError ? (
        <div className={styles.errorContainer}>
          <p>No details found for {city} or {city} does not exist</p>
        </div>
      ) : (
        <div className={styles.weatherContainer}>
          <div className={styles.allDetails}>
            <CurrWeather cityData={weatherData} />
            <UvIndexCard uvIndex={weatherData.current.uv} />
            {airQualityData && <AirQualityCard aqData={airQualityData} />}
            {forecastData && (
              <DailyForecastCard forecastData={forecastData.forecast.forecastday[0].hour} />
            )}
          </div>

          <div className={styles.forecast}>
            <h2>Forecast</h2>
            <Forecast city={city} />
          </div>

          <div>
            <News city={city} region={weatherData.location.region} />
          </div>
        </div>
      )}
    </div>
  );
}
