import React from "react";
import styles from "./WindCard.module.scss";
import {
  getWindDirection,
  getWindDirectionImage,
} from "@/utils/helpers/windHelper";

export default function WindCard({ windData }) {
  console.log(windData);
  console.log(windData.wind_kph);

  return (
    <div className={styles.windCard}>
      <h2>Wind</h2>
      <div className={styles.windSpeed}>
        <div className={styles.imgWrapper}>
          <img src="/wind.png" alt="windimill" />
        </div>
        <div className={styles.values}>
          <div className={styles.speedValueWrapper}>
          <p className={styles.speedValue}>{windData.wind_kph}</p>
          <p>km/h</p>
          </div>
          
        <p>Gusts {windData.gust_kph}km/h</p>

        </div>

      </div>
      <div className={styles.windDetails}>
        <div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img src="/thermometer.png" alt="temp" />
          </div>
          <div>
            <p>{windData.windchill_c}°</p>
            <p>Wind chill</p>
          </div>
        </div>
        <div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img
              src={getWindDirectionImage(windData.wind_dir)}
              alt="direction"
            />
          </div>
          <div>
            <p>
              {getWindDirection(windData.wind_dir)}
            </p>
            <p> Direction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
