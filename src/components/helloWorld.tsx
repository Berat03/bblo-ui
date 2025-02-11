import { useState, useEffect } from 'react';

function HelloMessage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://127.0.0.1:8000')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage('Error loading message'));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default HelloMessage;