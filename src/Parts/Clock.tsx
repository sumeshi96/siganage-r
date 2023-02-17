type Props = {
    hour: number,
    minute: number,
    second: number
}

const Dates = (props:Props) => {
    return (
        <p>{props.hour}:{props.minute}:{props.second}</p>
    )
}

export default Dates;