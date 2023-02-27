import ForecastDate from "../../Parts/ForecastDate/ForecastDate"
import Image from "../../Parts/Image/Image"
import Temp from "../../Parts/Temp/Temp"
import Table from "../../Parts/Table/Table"
import styles from "./Forecast.module.css"


type Props = {
    month: number,
    date: number,
    day: number,
    forecastData: any,
    nextMonth: number,
    nextDates: number,
    nextDay: number,
    isToday:boolean
}



/*
telop: string,
    highTemp: string,
    highTempDiff: string,
    lowTemp: string,
    lowTempDiff: string,
    zeroSix: string,
    sixTwelve: string,
    twelveEighteen: string,
    eighteenTwentyFour: string
*/

const Forecast = (props:Props) => {
    //対応する曜日を当てる
    const weekday: string[] = ["日", "月", "火", "水", "木", "金", "土"];
    const year: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
    //1桁数字を2桁にする
    const digits2 = (number: number): string => {
        return ("0" + number).slice(-2);
    }
    
    return (
        <div className={styles.forecast}>
            <ForecastDate month={props.isToday ? (digits2(year[props.month])) : (digits2(year[props.nextMonth]))} date={props.isToday ? (digits2(props.date)) :(digits2(props.nextDates))} day={props.isToday ? (weekday[props.day]):(weekday[props.nextDay])} isToday="dateToday"/>
            <div className={styles.imgTemp}>
                <Image telop={props.forecastData.telop} />
                <Temp highTemp={props.forecastData.highTemp} highTempDiff={props.forecastData.highTempDiff} lowTemp={props.forecastData.lowTemp} lowTempDiff={props.forecastData.lowTempDiff} />
            </div>
            <Table zeroSix={props.forecastData.zeroSix} sixTwelve={props.forecastData.sixTwelve } twelveEighteen={props.forecastData.twelveEighteen } eighteenTwentyFour={props.forecastData.eighteenTwentyFour } />
        </div>    
    );
}

export default Forecast;


