import React, { useState } from "react";
import styles from "./AirQualityCard.module.scss";
import { getAqDetails, getAqImage } from "../helpers/aqHelper";

export default function AirQualityCard({ aqData }) {
  console.log(aqData);
  const [isChecked, setIsChecked] = useState(false);
  const AQI_MAX = 500;
  const position = (Math.floor(aqData.aqi.aqi) / AQI_MAX) * 100;
  return (
    <div className={styles.airQuality}>
      <h2>AIR QUALITY</h2>
      <div className={styles.aqDetails}>
        <div className={styles.imgWrapper}>
          <img src={getAqImage(aqData.aqi.category)} alt="AQI" />
        </div>
        <p className={styles.aqValue}>{Math.floor(aqData.aqi.aqi)} </p>
        <p>AQI</p>
      </div>
      <div>
        <p>{aqData.aqi.category}</p>
        <p>{getAqDetails(aqData.aqi.category)}</p>
        <div className={styles.aqiLabels}>
          <p>Good</p>
          <p>Hazardous</p>
        </div>

        <div className={styles.aqiBarContainer}>
          <div className={styles.aqiMarker} style={{ left: `${position}%` }} />
        </div>
      </div>
      <div className={styles.dropdown}>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className={styles.hiddenCheckbox}
        />
        <svg
          viewBox="0 0 512 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.chevronDown} ${isChecked ? styles.rotated : ""}`}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </label>
      </div>
    </div>
  );
}
