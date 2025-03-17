"use client";

import {
  CurrWeather,
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
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";

import Sharebtn from "./sharebtn";
import { throttle } from "@/utils/helpers/throttle";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const { city } = use(params);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState(
    `Searching for ${city} details ...`
  );
  const [timeoutReached, setTimeoutReached] = useState(false);

  const handleReload = useCallback(
    throttle(() => {
      setRefreshKey((prevKey) => prevKey + 1);
      console.log("Window relaoded");
    }, 5000),
    []
  );

  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
    { icon: <RefreshIcon />, name: "Refresh Data", action: handleReload },
  ];
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
            <News city={city} region={weatherData.location.region} />
          </div>
        </div>
      )}
      <div>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.action}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}
