import styles from "./ForecastDate.module.css"

type Props = {
    month: string,
    date: string,
    day: string,
    isToday: string
}

const Dates = (props: Props) => {
    return (
        <p className={styles.date}>{props.month}月{props.date}日 ({props.day})</p>
    );
}

export default Dates;