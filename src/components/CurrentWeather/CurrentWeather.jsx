"use client";

import { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.scss";
import { fetchCurrLocationWeatherData } from "@/utils/api";
import useLocationStore from "@/store/useLocationStore";

export default function CurrentWeather() {
  const [cityData, setCityData] = useState("");
  const {setLocation} = useLocationStore();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const data = await fetchCurrLocationWeatherData(lat, lon);
        if (data) {
          setCityData(data);
          console.log(data)
          setLocation(data.location.name)

        }
      });
    }
  }, [setLocation]);

  

  return (
    <div className={styles.card}>
      <svg
        fill="none"
        viewBox="0 0 342 175"
        height="175"
        width="342"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.background}
      >
        <path
          fill="url(#paint0_linear_103_640)"
          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="128"
            x2="354.142"
            y1="128"
            x1="0"
            id="paint0_linear_103_640"
          >
            <stop stopColor="#5936B4"></stop>
            <stop stopColor="#362A84" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>

      {cityData ? (
        <>
          <div className={styles.cloud}>
            <img src={cityData.current.condition.icon.replace("64x64", "128x128")} />
          </div>
          <p className={styles.mainText}>{cityData.current.temp_c}°C</p>
          <div className={styles.info}>
            <div className={styles.infoLeft}>
              <p>Today</p>
              <p className={styles.textGray}>
                Humidity:{cityData.current.humidity}
              </p>
              <p>
                {cityData.location.name},{cityData.location.country}
              </p>
            </div>
            <p className={styles.infoRight}>
              {cityData.current.condition.text}
            </p>
          </div>
        </>
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
    </div>
  );
}
