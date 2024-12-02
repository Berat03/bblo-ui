import { useState } from 'react';

export const LiveDateTime = () => {
    const [date] = useState(new Date());
    const formattedDate = date.toLocaleDateString('en-GB', {
        weekday: 'short', // 'Tue'
        day: 'numeric' // '17'
    });

    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 24-hour format
    });
    return (
        <>
            {formattedDate} {formattedTime}
        </>
    );
};
