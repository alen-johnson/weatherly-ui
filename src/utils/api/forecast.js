import { FORECAST_API_URL } from "../constants";

export const fetchForecastData = async (city) => {
    try {
      const res = await fetch(`${FORECAST_API_URL}${city}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return await res.json();
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  };