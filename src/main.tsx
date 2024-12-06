import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './app/globals.css';
import { Analytics } from '@vercel/analytics/react';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <Analytics />
    </StrictMode>
);
