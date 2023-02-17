import Dates from "../Parts/Dates";
import Clock from "../Parts/Clock";

type Props = {
    year: number,
    month: number,
    date: number,
    day: number,
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
        <div className="data-clock-container">
            <Dates year={String(props.year)} month={digits2(props.month)} date={digits2(props.date)} day={weekday[props.day]} />
            <Clock hour={digits2(props.hour)} minute={digits2(props.minute)} second={digits2(props.second)} />
        </div>
    );
}

export default DataClock;