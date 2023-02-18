import styles from "./Table.module.css"

const Table = () => {
    return(
        <table className={styles.table}>
            <tbody>
                <tr><th></th><th>00-06</th><th>06-12</th><th>12-18</th><th>18-24</th></tr>
                <tr><th>降水確率</th><td>---</td><td>---</td><td>---</td><td>---</td></tr>
            </tbody>    
    </table>
    )
}

export default Table;