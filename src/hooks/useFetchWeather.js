const { fetchWeatherData } = require("@/utils/api/weather");
const { useEffect, useState } = require("react");

export const useFetchWeather = (city) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetchWeatherData(city);

        if (res) {
          setData(res);
        }
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(true);
      }
    };

    getData();

  }, [city]);

  return {data, loading, error}
};
