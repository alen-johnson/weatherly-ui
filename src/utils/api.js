const WEATHER_API_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;
const FORECAST_API_URL = process.env.NEXT_PUBLIC_FORECAST_API_URL;
const NEWS_API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;

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

export const fetchNewsData = async (city) => {
  try {
    const res = await fetch(`${NEWS_API_URL}${city}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};
