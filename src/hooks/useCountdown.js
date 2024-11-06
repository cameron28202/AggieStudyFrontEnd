import { useEffect, useState } from "react";

const useCountdown = (duration, callback) => {
    const [time, setTime] = useState(duration * 1000);
    
    useEffect(() => {
        if(time <= 0) {
            callback();
            return;
        }
        const interval = setInterval(() => {
            setTime((prev) => prev - 1000)
        }, 1000);

        return () => clearInterval(interval);

    }, [time, callback])

    return time;
}

export default useCountdown;