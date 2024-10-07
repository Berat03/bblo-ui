interface FormattedLiveDateTimeProps {
    date: Date;
}
export const FormattedLiveDateTime = (props: FormattedLiveDateTimeProps) => {
    const formattedDate = props.date.toLocaleDateString('en-GB', {
        weekday: 'short', // 'Tue'
        day: 'numeric' // '17'
    });

    const formattedTime = props.date.toLocaleTimeString('en-GB', {
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
