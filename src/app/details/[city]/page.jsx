"use client";

import {
  CurrWeather,
  FAB,
  Forecast,
  Navbar,
  News,
} from "@/components/componentsIndex";
import React, { use, useCallback, useEffect, useState } from "react";
import styles from "../../home/home.module.scss";
import {
  AirQualityCard,
  DailyForecastCard,
  UvIndexCard,
} from "@/components/WeatherCards/weatherCardsIndex";
import { useFetchWeather } from "@/hooks/useFetchWeather";
import { useFetchAirQuality } from "@/hooks/useFetchAirQuality";
import { useFetchForecast } from "@/hooks/useFetchForecast";
import { throttle } from "@/utils/helpers/throttle";


export default function Page({ params }) {
  const { city } = use(params);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState(
    `Searching for ${city} details ...`
  );
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
    !weatherData ||
    !airQualityData ||
    !forecastData ||
    weatherDataLoading ||
    airQualityDataLoading ||
    forecastDataLoading;

  const isError =
    !isLoading &&
    (!weatherData?.location || weatherDataError || forecastDataError);

  //write reload fn here and pass it as prop for propper throttling
    const handleReload = useCallback(
      throttle(() => {
        setRefreshKey((prevKey) => prevKey + 1);
      }, 5000),
      [setRefreshKey]
    );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutReached(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [city]);

  return (
    <div className={styles.home} key={refreshKey}>
      <Navbar />

      {isLoading && !timeoutReached ? (
        <div className={styles.loadingContainer}>
          <p>{loadingMessage}</p>
        </div>
      ) : isError ? (
        <div className={styles.errorContainer}>
          <p>
            No details found for {city} or {city} does not exist
          </p>
        </div>
      ) : (
        <div className={styles.weatherContainer}>
          <div className={styles.allDetails}>
            <CurrWeather cityData={weatherData} />
            <UvIndexCard uvIndex={weatherData.current.uv} />
            {airQualityData && <AirQualityCard aqData={airQualityData} />}
            {forecastData && (
              <DailyForecastCard
                forecastData={forecastData.forecast.forecastday[0].hour}
              />
            )}
          </div>

          <div className={styles.forecast}>
            <h2>Forecast</h2>
            <Forecast city={city} />
          </div>

          <div>
            <p>News</p>
            <News city={city} region={weatherData.location.region} />
          </div>
        </div>
      )}
      <div>
        <FAB forecastData={forecastData} handleReload={handleReload}/>
      </div>
    </div>
  );
}
