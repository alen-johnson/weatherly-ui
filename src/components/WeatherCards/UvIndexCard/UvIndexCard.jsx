import React from "react";
import styles from "./UvIndexCard.module.scss";
import { getUvDetails, getUvImage } from "../helpers/uvIndexHelper";

export default function UvIndexCard({ uvIndex }) {
  const { risk, message } = getUvDetails(uvIndex);
  const uvImage = getUvImage(uvIndex);

  return (
    <div className={styles.uvCard}>
      <h2>UV Index</h2>
      <div className={styles.uvDetails}>
        <div className={styles.imgWrapper}>
          <img src={uvImage} alt="UV Level" />
        </div>
        <p className={styles.uvValue}>{uvIndex} </p>
        <p>UVI</p>
      </div>
      <p>{risk}</p>
      <p>{message}</p>
    </div>
  );
}
