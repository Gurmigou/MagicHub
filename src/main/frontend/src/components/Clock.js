import React, {useState} from 'react'

function Clock() {
    const formatTime = (hours, minutes, seconds) => {
        let formatted = '';
        if (hours < 10)
            formatted += '0';
        formatted += (hours + ':');
        if (minutes < 10)
            formatted += '0';
        formatted += (minutes + ':');
        if (seconds < 10)
            formatted += '0';
        formatted += seconds;
        return formatted;
    }

    const getTimeFormatted = () => {
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        return formatTime(h, m, s);
    }

    let curTime = getTimeFormatted();

    const [time, setTime] = useState(curTime);

    const updateTime = () => {
        curTime = getTimeFormatted();
        setTime(curTime);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="time-block">
            <div className="time">
                <p>{time}</p>
            </div>
        </div>
    );
}

export default Clock;