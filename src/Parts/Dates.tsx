type Props = {
    year: string,
    month: string,
    date: string,
    day: string
}

const Dates = (props: Props) => {
    return (
        <p>{props.year}年{props.month}月{props.date}日 ({props.day})</p>
    );
}

export default Dates;