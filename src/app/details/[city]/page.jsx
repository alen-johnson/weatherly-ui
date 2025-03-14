"use client";

import {
  CurrWeather,
  Forecast,
  Navbar,
  News,
} from "@/components/componentsIndex";
import { fetchWeatherData } from "@/utils/api";
import React, { use, useEffect, useState } from "react";
import styles from "../../home/home.module.scss";
import { Button } from "@mui/material";
import { UvIndexCard } from "@/components/WeatherCards/weatherCardsIndex";

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
      // console.log(data);

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
    <div className={styles.home}>
      <Navbar />

      {weatherData?.location ? (
        <div className={styles.weatherContainer}>
          <div className={styles.allDetails}>
            <CurrWeather cityData={weatherData} />
            <UvIndexCard uvIndex={weatherData.current.uv}/>

          </div>


{/* add a drawer component over here  */}
         {weatherData ?<div>
          <p>Heat Index : {weatherData.current.heatindex_c} C</p>
          <p>Pressure : {weatherData.current.pressure_in}</p>
          <p>Uv  :{weatherData.current.uv}</p>
          <p>Wind speed{weatherData.current.wind_kph}kph</p>
          <p>{weatherData.current.heatindex_c}</p>
          <p>{weatherData.current.heatindex_c}</p>

          <Button>More detail</Button>

            </div> :
            <>
            </>
}
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
