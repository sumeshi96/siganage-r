import { useEffect ,useState } from "react";
import Dates from "../Parts/Dates";
import Clock from "../Parts/Clock";

const DataClock = () => {
    const [dates, setDates] = useState(new Date());
    const year:number = dates.getFullYear();
    const month:number = dates.getMonth();
    const date:number = dates.getDate();
    const day: number = dates.getDay();
    const weekday: string[] = ["日", "月", "火", "水", "木", "金", "土"];
    const hour: number = dates.getHours();
    const minute: number = dates.getMinutes();
    const second: number = dates.getSeconds();
    setInterval(() => {
        setDates(new Date());
    }, 1000);
    return (
        <div className="data-clock-container">
            <Dates year={year} month={month} date={date} day={weekday[day]} />
            <Clock hour={hour} minute={minute} second={second} />
        </div>
        )
}

export default DataClock;