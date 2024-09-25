import { HomePage } from '@/app/homePage';

import { ThemeProvider } from '@/components/darkMode/theme-provider';

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
