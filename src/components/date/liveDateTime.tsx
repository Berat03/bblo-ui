import { useState, useEffect } from 'react';

export const LiveDateTime = () => { // To specific of an output
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(new Date());

        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 30000); // Why does this trend slightly behind my laptop's local time?

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = date.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric'
    });

    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <>
            {formattedDate} {formattedTime}
        </>
    );
};
