import { useEffect, useState } from 'react';

export function HelloWorld() {
    const [message, setMessage] = useState<string>('Loading...');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetch('http://127.0.0.1:5000/hello')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setMessage(data.message))
            .catch(error => {
                console.error('Error:', error);
                setError(error.message);
                setMessage('Failed to load');
            });
    }, []);

    return (
        <div className="flex-1">
            {message}
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    );
} 