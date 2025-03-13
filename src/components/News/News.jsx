"use client";
import React, { useEffect, useState } from "react";
import styles from "./News.module.scss";
import { fetchNewsData } from "@/utils/api";
import { Card, CardContent } from "@mui/material";

export default function News({ city, region }) {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const cityData = await fetchNewsData(city);
      console.log(cityData);

      if (cityData && cityData.length > 0) {
        setNewsData(cityData);
      } else {
        const regionData = await fetchNewsData(region);
        console.log(regionData);

        if (regionData) {
          setNewsData(regionData);
        }
      }
    };
    fetchNews();
  }, [city]);

  return (
    <div className={styles.news}>
      {newsData && newsData.length > 0 ? (
        <>
          {newsData.map((news, idx) => (
            <div key={idx} className={styles.newscard}>
              <Card>
                <CardContent>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                  <img src={news.urlToImage} />
                </CardContent>
              </Card>
            </div>
          ))}
        </>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}
