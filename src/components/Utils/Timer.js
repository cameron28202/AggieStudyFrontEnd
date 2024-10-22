import useCountdown from "../../hooks/useCountdown";


const Timer = ({ duration, onTimeEnd }) => {

    const time = useCountdown(duration, onTimeEnd);
    return(
        <div>
            Time left: {time}
        </div>
    );

}


export default Timer;