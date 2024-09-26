import { useState, useEffect } from 'react';

export const FormattedLiveDateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    }, []);

    const formattedDate = date.toLocaleDateString('en-GB', {
        weekday: 'short',  // 'Tue'
        day: 'numeric',    // '17'
    });

    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',  // Include seconds
        hour12: false // 24-hour format
    });

    return (
            <p>{formattedDate} {formattedTime}</p>
    );
};
