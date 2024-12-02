import { ThemeProvider } from '@/components/darkMode/theme-provider';
import { TabSwitch } from '@/components/tab/TabSwitch';

function App() {
    return (
        <>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <div className='flex flex-row items-start p-2'>
                    <TabSwitch />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
