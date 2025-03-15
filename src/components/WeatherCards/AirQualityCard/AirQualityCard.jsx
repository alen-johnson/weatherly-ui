import React, { useState } from "react";
import styles from "./AirQualityCard.module.scss";
import { getAqDetails, getAqImage } from "../helpers/aqHelper";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AirQualityCard({ aqData }) {
  // console.log(aqData);
  const [isChecked, setIsChecked] = useState(true);
  const AQI_MAX = 500;
  const position = (Math.floor(aqData.aqi.aqi) / AQI_MAX) * 100;
  const [open, setOpen] = useState(false);

  const pollutants = [
    { name: "CO", value: aqData.air_quality.co, unit: "µg/m³" },
    { name: "NO₂", value: aqData.air_quality.no2, unit: "µg/m³" },
    { name: "O₃", value: aqData.air_quality.o3, unit: "µg/m³" },
    { name: "SO₂", value: aqData.air_quality.so2, unit: "µg/m³" },
    { name: "PM2.5", value: aqData.air_quality.pm2_5, unit: "µg/m³" },
    { name: "PM10", value: aqData.air_quality.pm10, unit: "µg/m³" },
    ,
  ];

  const handleModal = () => {
    setOpen(!open);
    setIsChecked(!isChecked);
  };
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
            onChange={() => handleModal()}
            className={styles.hiddenCheckbox}
          />
          <svg
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.chevronDown} ${
              isChecked ? styles.rotated : ""
            }`}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </label>

        <Dialog open={open} onClose={handleModal}>
          <DialogTitle> Pollutants</DialogTitle>
          <DialogContent>
            <div className={styles.pollutantsTable}>
              <table>
                <thead>
                  <tr>
                    <th>Pollutant</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pollutants.map((pollutant, index) => (
                    <tr key={index}>
                      <td>{pollutant.name}</td>
                      <td>
                        {pollutant.value} {pollutant.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DialogContent>
          <DialogActions>
            <button onClick={handleModal}>Close</button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
