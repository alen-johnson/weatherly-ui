"use client";

import WeatherIcon from "@/components/CurrentWeather/WeatherIcon";
import { Navbar } from "@/components/componentsIndex";
import { fetchWeatherData } from "@/utils/api";
import React, { use, useEffect, useState } from "react";

export default function page({ params }) {
  const { city } = use(params);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

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
  }, [city]);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {weatherData?.location ? (
        <div>
          <h1>{weatherData.location.name}</h1>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
          <WeatherIcon condition={weatherData.current.condition.text} />
          
        </div>
      ) : (
        <div>
          <p> No data found</p>
        </div>
      )}
    </div>
  );
}
