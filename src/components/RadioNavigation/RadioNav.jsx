"use client"

import React, { useState } from 'react';
import styles from './RadioNav.module.scss'

export default function RadioNav( {onSelect}) {
  const [selected, setSelected] = useState("Temperature");

  const handleSelection = (value) => {
    setSelected(value);
    onSelect(value)
  };

  return (
    <div className={styles.radioInputs}>
      <label className={styles.radio}>
        <input
          type="radio"
          name="radio"
          value="Temperature"
          checked={selected === "Temperature"}
          onChange={() => handleSelection("Temperature")}
        />
        <img
          className={styles.name}
          src="/thermometer.png"
          alt="Temperature"
        />
      </label>

      <label className={styles.radio}>
        <input
          type="radio"
          name="radio"
          value="Precipitation"
          checked={selected === "Precipitation"}
          onChange={() => handleSelection("Precipitation")}
        />
        <img
          className={styles.name}
          src="/rainy.png"
          alt="Precipitation"
        />
      </label>

      <label className={styles.radio}>
        <input
          type="radio"
          name="radio"
          value="Wind"
          checked={selected === "Wind"}
          onChange={() => handleSelection("Wind")}
        />
        <img
          className={styles.name}
          src="/windy.png"
          alt="Wind"
        />
      </label>
    </div>
  );
}
