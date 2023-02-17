import { useEffect,useState } from "react";

import DateClock from "../Templates/DateClock"
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
        <>
            <DateClock year={year} month={month} date={dates} day={day} hour={hour} minute={minute} second={second} />
        </>
    );
}

export default App;