import styles from "./Dates.module.css"

type Props = {
    year: string,
    month: string,
    date: string,
    day: string,
    isToday: string
}

const Dates = (props: Props) => {
    return (
        <p className={styles.date}>{props.year}年{props.month}月{props.date}日 ({props.day})</p>
    );
}

export default Dates;