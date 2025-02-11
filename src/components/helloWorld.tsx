import { useState, useEffect } from 'react';

function HelloMessage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use environment variable or fallback to localhost for development
    const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api` 
      : 'http://localhost:8000';

    fetch(apiUrl)
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching message:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{message}</div>;
}

export default HelloMessage;