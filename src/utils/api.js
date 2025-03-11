export const fetchWeatherData = async (city) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/weather/${city}`);
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
    const res = await fetch(
      `http://127.0.0.1:8000/weather/${latitude},${longtitude}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch current location data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

export const fetchForecastData = async(city) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/forecast/${city}`)
    if (!res.ok){
      throw new Error("Failed to fetch data");
    }
    return await res.json()
  }catch(error){
    console.log("Error:", error)
    return null
  }
}
