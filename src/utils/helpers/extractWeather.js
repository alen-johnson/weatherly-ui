import { FORECAST_INDEXES } from "../constants";

export const extractTemperatures = (hourlyData) => {
  return FORECAST_INDEXES.filter((i) => i < hourlyData.length).map(
    (i) => hourlyData[i].temp_c
  );
};

export const extractIcons = (hourlyData) => {
  return FORECAST_INDEXES.filter(
    (i) => i < hourlyData.length && hourlyData[i]?.condition?.icon
  ) 
    .map((i) => {
      const img = new Image();
      img.src = hourlyData[i].condition.icon; 
      return img;
    });
};

export const extractPrecipitatiton = (hourlyData) => {
  return FORECAST_INDEXES.filter((i) => i < hourlyData.length).map(
    (i) => hourlyData[i].precip_mm
  );
};

export const extractWind = (hourlyData) => {
  return FORECAST_INDEXES.filter((i) => i < hourlyData.length).map(
    (i) => hourlyData[i].wind_kph
  );
};
