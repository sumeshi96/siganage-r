import ForecastDate from "../../Parts/ForecastDate/ForecastDate"
import Image from "../../Parts/Image/Image"
import Temp from "../../Parts/Temp/Temp"
import Table from "../../Parts/Table/Table"
import styles from "./Forecast.module.css"

type Props = {
    month: number,
    date: number,
    day: number
}

const Forecast = (props:Props) => {
    //対応する曜日を当てる
    const weekday: string[] = ["日", "月", "火", "水", "木", "金", "土"];
    //1桁数字を2桁にする
    const digits2 = (number: number): string => {
        return ("0" + number).slice(-2);
    }
    const telop: string = "雨";
    
    return (
        <div className={styles.forecast}>
            <ForecastDate month={digits2(props.month)} date={digits2(props.date)} day={weekday[props.day]} isToday="dateToday"/>
            <div className={styles.imgTemp}>
                <Image telop={telop} />
                <Temp />
            </div>
            <Table />
        </div>    
    );
}

export default Forecast;