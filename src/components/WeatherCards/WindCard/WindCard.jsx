import React from "react";
import styles from "./WindCard.module.scss";
import {
  getWindDirection,
  getWindDirectionImage,
} from "@/utils/helpers/windHelper";

export default function WindCard({ windData }) {
  return (
    <div className={styles.windCard}>
      <h2>Wind</h2>

      <div className={styles.windSpeedSection}>
        <div className={styles.imgWrapper}>
          <img src="/icons/wind.png" alt="Wind icon" />
        </div>
        <div className={styles.windStats}>
          <div className={styles.speedValueWrapper}>
            <p className={styles.speedValue}>{windData.wind_kph}</p>
            <p>km/h</p>
          </div>
          <p className={styles.type}>Gusts {windData.gust_kph} km/h</p>
        </div>
      </div>

      <div className={styles.windDetails}>
        <div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img src="/icons/thermometer.png" alt="Thermometer" />
          </div>
          <div>
            <p>{windData.windchill_c}°</p>
            <p className={styles.type}>Wind chill</p>
          </div>
        </div>
        <div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img
              src={getWindDirectionImage(windData.wind_dir)}
              alt={`Wind direction: ${windData.wind_dir}`}
            />
          </div>
          <div>
            <p>{getWindDirection(windData.wind_dir)}</p>
            <p className={styles.type}>Direction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
