import styles from "./Table.module.css"

interface Props { 
    zeroSix: string,
    sixTwelve: string,
    twelveEighteen: string,
    eighteenTwentyFour: string
}
const Table = (props:Props) => {
    return(
        <table className={styles.table}>
            <tbody>
                <tr><th></th><th>00-06</th><th>06-12</th><th>12-18</th><th>18-24</th></tr>
                <tr><th>降水確率</th><td>{props.zeroSix}</td><td>{props.sixTwelve}</td><td>{props.twelveEighteen}</td><td>{props.eighteenTwentyFour}</td></tr>
            </tbody>    
    </table>
    )
}

export default Table;