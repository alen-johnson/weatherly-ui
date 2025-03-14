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
import { fetchCurrLocationWeatherData } from "@/utils/api/weather";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cityData, setCityData] = useState("");
  const { location, setLocation } = useLocationStore();
  const router = useRouter();


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

          <button className={styles.btn} onClick={()=> router.push(`/details/${location}`)}>
            More Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15px"
              width="15px"
              className={styles.icon}
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                stroke="#292D32"
                d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
              ></path>
            </svg>
          </button>
        </div>

        <div className={styles.forecast}>
          <h2>Forecast</h2>
          <Forecast city={location} />
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
