import { fetchForecastData } from "@/utils/api/forecast";
import { useEffect, useState } from "react";


export const useFetchForecast = (city) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        try {
          const res = await fetchForecastData(city);
  
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
}