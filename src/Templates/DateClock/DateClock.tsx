import Dates from "../../Parts/Dates/Dates";
import Clock from "../../Parts/Clock/Clock";
import styles from "./DateClock.module.css";
type Props = {
    year: number,
    month: number,
    date: number,
    day: number,
    isToday:string,
    hour: number,
    minute: number,
    second: number
}

const DataClock = (props:Props) => {
    //対応する曜日を当てる
    const weekday: string[] = ["日", "月", "火", "水", "木", "金", "土"];
    //1桁数字を2桁にする
    const digits2 = (number: number): string => {
        return ("0" + number).slice(-2);
    }

    return (
        <div className={styles.box}>
            <Dates year={String(props.year)} month={digits2(props.month)} date={digits2(props.date)} day={weekday[props.day]} isToday={ props.isToday} />
            <Clock hour={digits2(props.hour)} minute={digits2(props.minute)} second={digits2(props.second)} />
        </div>
    );
}

export default DataClock;