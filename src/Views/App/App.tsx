import { useEffect, useState } from "react";
import DateClock from "../../Templates/DateClock/DateClock";
import Forecast from "../../Templates/Forecast/Forecast";
import styles from "./App.module.css";

interface ForecastData {
  telop: string;
  highTemp: string;
  highTempDiff: string;
  lowTemp: string;
  lowTempDiff: string;
  zeroSix: string;
  sixTwelve: string;
  twelveEighteen: string;
  eighteenTwentyFour: string;
}

interface Props {
  forecastData: ForecastData;
}

const App: React.FC<Props> = ({ forecastData }) => {
  const [date, setDate] = useState(new Date());
    const [todayForecastData, setTodayForecastData] = useState<ForecastData>(forecastData);
    const [tomorrowForecastData, setTomorrowForecastData] = useState<ForecastData>(forecastData);

  // Date props
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const dates: number = date.getDate();
  const day: number = date.getDay();
  const hour: number = date.getHours();
  const minute: number = date.getMinutes();
  const second: number = date.getSeconds();
    const nextDate: Date = date
    nextDate.setDate(date.getDate() + 1)
    const nextMonth: number = nextDate.getMonth();
    const nextDates: number = nextDate.getDate();
    const nextDay: number = nextDate.getDay();
  // setTimeoutの開始時間の調整
  const nextTiming = () => {
    return 1000 - (Date.now() % 1000);
  };

  useEffect(() => {
    let time = setTimeout(function main() {
      time = setTimeout(main, nextTiming());
      setDate(new Date());
    }, nextTiming());
    return () => {
      clearTimeout(time);
    };
  }, []);
//今日の天気取得
  useEffect(() => {
    const fetchTodayForecast = async () => {
        const response = await fetch(
          "https://us-central1-signage-r-193f6.cloudfunctions.net/api/today"
        );
        const data = await response.json();
        setTodayForecastData(data);
        console.log(data);
      };

    fetchTodayForecast();
  }, []);

  useEffect(() => {
    // 3の倍数の時間になったら実行
      const getDataInterval = setInterval(() => {
        const fetchTodayForecast = async () => {
            const response = await fetch(
              "https://us-central1-signage-r-193f6.cloudfunctions.net/api/today"
            );
            const data = await response.json();
            setTodayForecastData(data);
          };
      const currentHour = new Date().getHours();

      if (currentHour % 3 === 0) {
        fetchTodayForecast();
      }
    }, 60 * 1000 * 5);

    return () => clearInterval(getDataInterval);
  }, []);

//明日の天気取得
  useEffect(() => {
    const fetchTomorrowForecast = async () => {
        const response = await fetch(
          "https://us-central1-signage-r-193f6.cloudfunctions.net/api/tomorrow"
        );
        const data = await response.json();
        setTomorrowForecastData(data);
        console.log(data);
      };

    fetchTomorrowForecast();
  }, []);

  useEffect(() => {
    // 3の倍数の時間になったら実行
      const getDataInterval = setInterval(() => {
        const fetchTomorrowForecast = async () => {
            const response = await fetch(
              "https://us-central1-signage-r-193f6.cloudfunctions.net/api/tomorrow"
            );
            const data = await response.json();
            setTomorrowForecastData(data);
          };
      const currentHour = new Date().getHours();

      if (currentHour % 3 === 0) {
        fetchTomorrowForecast();
      }
    }, 60 * 1000 * 5);

    return () => clearInterval(getDataInterval);
  }, []);

  return (
    <div className={styles.app}>
      <DateClock
        year={year}
        month={month}
        date={dates}
        day={day}
        hour={hour}
        minute={minute}
        second={second}
        isToday="title"
      />
      <div className={styles.forecast}>
        <Forecast
            month={month}
            date={dates}
            day={day}  
            nextMonth={nextMonth}
            nextDates={nextDates}
            nextDay={nextDay}        
            forecastData={todayForecastData}
            isToday={true}
        />
        <Forecast
          month={month}
          date={dates}
                  day={day}  
                  nextMonth={nextMonth}
                  nextDates={nextDates}
                  nextDay={nextDay}        
                  forecastData={tomorrowForecastData}
                  isToday={false}
        />
      </div>
    </div>
  );
};

export default App;