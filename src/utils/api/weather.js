import { WEATHER_API_URL } from "../constants";

export const fetchWeatherData = async (city) => {
  try {
    const res = await fetch(`${WEATHER_API_URL}${city}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

export const fetchCurrLocationWeatherData = async (latitude, longtitude) => {
  try {
    const res = await fetch(`${WEATHER_API_URL}${latitude},${longtitude}`);
    if (!res.ok) {
      throw new Error("Failed to fetch current location data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

export const fetchAirQualityData = async (city) => {
  try {
    const res = await fetch(`${WEATHER_API_URL}${city}/air-quality`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};
