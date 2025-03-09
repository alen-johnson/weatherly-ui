import { CurrWeather, Navbar } from "@/components/componentsIndex";
import styles from "./home.module.scss";
import { Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.container}>
        <div className="">
          <h2>Current Weather</h2>
          <CurrWeather />
        </div>
        <div className={styles.forecast}>
          <h2>Forecast</h2>
          <Card>
            <CardContent>
              <p>Hello</p>
              <h2> Today</h2>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>Hello</p>
              <h2> Today</h2>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>Hello</p>
              <h2> Today</h2>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2>Weather news around the world</h2>
        </div>
      </div>
    </div>
  );
}
