import { CurrWeather, Forecast, Navbar } from "@/components/componentsIndex";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.current}>
          <h2>Current Weather</h2>
          <CurrWeather />
        </div>
        <div className={styles.forecast}>
          <h2>Forecast</h2>
          <Forecast />
        </div>
        <div>
          <h2>Weather news around the world</h2>
        </div>
      </div>
    </div>
  );
}
