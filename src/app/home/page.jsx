"use client";
import {
  CurrWeather,
  Forecast,
  Navbar,
  News,
} from "@/components/componentsIndex";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import useLocationStore from "@/store/useLocationStore";
import { fetchCurrLocationWeatherData } from "@/utils/api";

export default function Home() {
  const [cityData, setCityData] = useState("");
  const { location, setLocation } = useLocationStore();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const data = await fetchCurrLocationWeatherData(lat, lon);
        if (data) {
          setCityData(data);
          // console.log(data)
          setLocation(data.location.name);
        }
      });
    }
  }, [setLocation]);

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.weatherContainer}>
        <div className={styles.current}>
          <h2>Current Weather</h2>
          <CurrWeather cityData={cityData} />
        </div>
        <div className={styles.forecast}>
          <h2>Forecast</h2>
          <Forecast city={location}/>
        </div>
        {location && (
          <div className={styles.news}>
            <h2>News</h2>
            <News city={location} region={cityData?.location?.region} />
          </div>
        )}
      </div>
    </div>
  );
}
