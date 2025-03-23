import React from "react";
import styles from "./PrecipitationCard.module.scss";

export default function PrecipitationCard({ data, dewPoint }) {
  const willItRain = (v) => {
    if (v == 1){
      return "Yes"
    }else{
      return "No"
    }
  }
  return (
    <div className={styles.precipitation}>
     <h2>Precipitation</h2>
      <div className={styles.precipitationValue}>
        <div className={styles.imgWrapper}>
          <img src='/icons/eco.png' alt='droplet' />
        </div>
        <p className={styles.pValue}>{data.day.totalprecip_mm} </p>
        <p>mm</p>
      </div>
      <div className={styles.precipitationDetails}>
      <div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img src="/icons/humidity.png" alt="temp" />
          </div>
          <div>
            <p className={styles.detailsP}>{data.day.avghumidity}%</p>
            <p>Humidity</p>
          </div>
        </div><div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img src="/icons/percent.png" alt="temp" />
          </div>
          <div>
            <p className={styles.detailsP}>{data.day.daily_chance_of_rain}%</p>
            <p>Chances</p>
          </div>
        </div><div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img src="/icons/eco.png" alt="temp" />
          </div>
          <div>
            <p className={styles.detailsP}>{dewPoint}°</p>
            <p>Dew Point</p>
          </div>
        </div><div className={styles.detailsChild}>
          <div className={styles.iconWrapper}>
            <img src="/icons/umbrella.png" alt="temp" />
          </div>
          <div>
            <p className={styles.detailsP}>{ willItRain(data.day.daily_will_it_rain)}</p>
            {data.day.daily_will_it_rain == 1 ? <>
              <p>It will rain</p>
            </> : <>
            <p>It will not rain</p>
            </>}
            
          </div>
        </div>
      </div>

    </div>
  );
}
