type Props = {
    hour: string,
    minute: string,
    second: string
}

const Dates = (props: Props) => {
    return (
        <p>{props.hour}:{props.minute}:{props.second}</p>
    );
}

export default Dates;