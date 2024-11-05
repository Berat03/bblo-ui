import { getCurrentOccupancy, OccupancyData } from '@/api/getCurrentOccupancy';
import OccupancyContext from '@/components/context/occupancyContext';
import { ThemeProvider } from '@/components/darkMode/theme-provider';
import { TabSwitch } from '@/components/tab/TabSwitch';
import { useEffect, useState } from 'react';

function App() {
    const [currentOccupancyData, setMyData] = useState<OccupancyData>({
        Level1: 0,
        Level2e: 0,
        Level3e: 0,
        Level3nsw: 0,
        Level4e: 0,
        Level4nsw: 0,
        total: 0
    });

    const fetchOccData = async () => {
        const occupancyData = await getCurrentOccupancy();
        if (occupancyData) {
            setMyData(occupancyData);
        } else {
            console.log('Error calling API for occupancy.');
        }
    };
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
            fetchOccData();
        }, 1000);        
        return () => clearInterval(timer);
    }, []);


    return (
        <>
        <OccupancyContext.Provider value={currentOccupancyData}>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <div className='flex flex-row items-start p-2'>
                    <TabSwitch date={date}/>
                </div>
            </ThemeProvider>
        </OccupancyContext.Provider>
        </>
    );
}

export default App;
