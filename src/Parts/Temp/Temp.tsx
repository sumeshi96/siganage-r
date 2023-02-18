import styles from "./Temp.module.css"
const Temp = () => {
    return (
        <div className={styles.box}>
            <div className={styles.highBox}>
                <p className={styles.highTemp}>最高&nbsp;<span className={styles.size}>00</span>&nbsp;℃</p>
                <p className={styles.highTempDiff}>[+00]</p>
            </div>
            <div className={styles.lowBox}>
                <p className={styles.lowTemp}>最低&nbsp;<span className={styles.size}>-00</span>&nbsp;℃</p>
                <p className={styles.lowTempDiff}>[-00]</p>
            </div>
        </div>
        );    
}
export default Temp;
