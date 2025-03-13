"use client";
import React, { useEffect, useState } from "react";
import styles from "./News.module.scss";
import { fetchNewsData } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function News({ city, region }) {
  const [newsData, setNewsData] = useState(null);
  const router = useRouter();
  

  useEffect(() => {
    const fetchNews = async () => {
      const cityData = await fetchNewsData(city);
      // console.log(cityData);

      if (cityData && cityData.length > 0) {
        setNewsData(cityData);
      } else {
        const regionData = await fetchNewsData(region);
        // console.log(regionData);

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
            <div key={idx} className={styles.newsCard} onClick={() => router.push(`${news.url}`)}>
              {news.urlToImage && (
                <img
                  src={news.urlToImage}
                  alt="news"
                  className={styles.newsImage}
                />
              )}
              <div className={styles.newsContent}>
                <h3 className={styles.newsTitle}>{news.title}</h3>
                <p className={styles.newsDescription}>
                  {news.description || "No description available"}
                </p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.newsReadMore}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}
