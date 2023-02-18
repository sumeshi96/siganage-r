import { useEffect,useState } from "react";
import DateClock from "../../Templates/DateClock/DateClock"
import Forecast from "../../Templates/Forecast/Forecast"
import styles from "./App.module.css"
const App = () => {
    const [date, setDate] = useState(new Date());
    //Date props
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const dates: number = date.getDate();
    const day: number = date.getDay();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();
    const second: number = date.getSeconds();
    //setTimeoutの開始時間の調整
    const nextTiming = () => {
        return (1000 - Date.now() % 1000);
    };
    
    useEffect(() => {
        let time = setTimeout(function main() { 
            time = setTimeout(main, nextTiming());
            setDate(new Date());
        },nextTiming());
        return () => {clearTimeout(time)}
    })
    
    return (
        <div className={styles.app}>
            <DateClock  year={year} month={month} date={dates} day={day} hour={hour} minute={minute} second={second} isToday="title" />
            <div className={styles.forecast}>
                <Forecast month={month} date={dates} day={day} />
                <Forecast month={month} date={dates} day={day}/>
            </div>
        </div>
    );
}

export default App;