import { getCurrentOccupancy, OccupancyData } from '@/api/getCurrentOccupancy';
import OccupancyContext from '@/components/context/occupancyContext';
import { ThemeProvider } from '@/components/darkMode/theme-provider';
import { TabSwitch } from '@/components/tab/TabSwitch';
import { useEffect, useState } from 'react';

function App() {
    const [currentOccupancyData, setMyData] = useState<OccupancyData>({
        Level1: 100,
        Level2e: 101,
        Level3e: 102,
        Level3nsw: 103,
        Level4e: 104,
        Level4nsw: 105,
        total: 1800
    });

    useEffect(() => {
        const fetchOccData = async () => {
            const occupancyData = await getCurrentOccupancy();
            if (occupancyData) {
                setMyData(occupancyData);
            } else {
                // There was an error fetching the data
                // Fall back values? Refactor this!
            }
        };

        fetchOccData();
    }, []);

    return (
        <>
        <OccupancyContext.Provider value={currentOccupancyData}>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <div className='flex flex-row items-start p-2'>
                    <TabSwitch />
                </div>
            </ThemeProvider>
        </OccupancyContext.Provider>
        </>
    );
}

export default App;
