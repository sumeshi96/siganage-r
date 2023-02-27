import styles from "./Temp.module.css"
type Props = {
    highTemp:string,
    highTempDiff:string,
    lowTemp:string,
    lowTempDiff:string,
}

const Temp = (props:Props) => {
    return (
        <div className={styles.box}>
            <div className={styles.highBox}>
                <p className={styles.highTemp}>最高&nbsp;<span className={styles.size}>{props.highTemp}</span>&nbsp;℃</p>
                <p className={styles.highTempDiff}>{props.highTempDiff}</p>
            </div>
            <div className={styles.lowBox}>
                <p className={styles.lowTemp}>最低&nbsp;<span className={styles.size}>{props.lowTemp}</span>&nbsp;℃</p>
                <p className={styles.lowTempDiff}>{props.lowTempDiff}</p>
            </div>
        </div>
        );    
}
export default Temp;
