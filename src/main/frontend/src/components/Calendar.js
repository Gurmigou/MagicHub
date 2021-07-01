import React, {useState} from 'react'

function Calendar() {
    const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    let dayOfWeek = now.getDay();
    let today = now.getDate();
    let month = now.getMonth();

    const [imageUrl, setImageUrl] = useState('/images/calendar/day' + today + '.png');

    const updateDay = () => {
        const now = new Date();
        const day = now.getDate();
        if (today !== day) {
            today = day;
            dayOfWeek = now.getDay();
            month = now.getMonth();
            setImageUrl('/images/calendar/day' + today + '.png');
        }
    }

    setInterval(updateDay, 1000);

    return (
        <div className="calendar-month-day-block">
            <div className="calendar-block">
                <div className="calendar">
                    <img id="calendar-img" src={imageUrl} alt="calendar"/>
                </div>
            </div>
            <div className="month-day-block">
                <div className="day-month">
                    <p>
                        {days[dayOfWeek]}<br/>
                        {months[month]}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Calendar;