import styles from "./Clock.module.css"

type Props = {
    hour: string,
    minute: string,
    second: string
}

const Dates = (props: Props) => {
    return (
        <p className={styles.clock}>{props.hour}:{props.minute}:{props.second}</p>
    );
}

export default Dates;