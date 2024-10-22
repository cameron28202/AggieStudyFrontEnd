import { useEffect, useState } from "react";

const useCountdown = (duration, callback) => {
    const [time, setTime] = useState(duration * 1000);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - interval)
        }, 1000)

        if(time <= 0) callback()

        return () => clearInterval(interval)

    }, [time, callback])

    return time;
}

export default useCountdown;